import { call, put } from "redux-saga/effects";
import {
  requestFetchMe,
  requestLogin,
  requestRefreshToken,
  requestRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { logOut, saveToken } from "utils/auth";
import { updateUser } from "./auth-slice";

export default function* handleRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestRegister, payload);
    if (response.status === 201) toast.success("Created account successfully");
  } catch (error) {
    toast.error(error);
  }
}

function* handleLogin({ payload }) {
  try {
    const response = yield call(requestLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* handleFetchMe({ payload }) {
  try {
    const response = yield call(requestFetchMe, payload);
    if (response.status === 200) {
      yield put(updateUser({ user: response.data, accessToken: payload }));
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* handleRefreshToken({ payload }) {
  try {
    const response = yield call(requestRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleFetchMe({ payload: response.data.accessToken });
    } else {
      yield handleLogOut();
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* handleLogOut() {
  yield put(updateUser({ user: undefined, accessToken: null }));
  logOut();
}

export { handleLogin, handleFetchMe, handleRefreshToken, handleLogOut };
