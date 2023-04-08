import { call } from "redux-saga/effects";
import { requestLogin, requestRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestRegister, payload);
    if (response.status === 201) toast.success("Created account successfully");
  } catch (error) {
    console.error(error);
  }
}

function* handleLogin({ payload }) {
  try {
    const response = yield call(requestLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
  } catch (error) {
    console.error(error.message);
  }
}

export { handleLogin };
