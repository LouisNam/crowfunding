import { call } from "redux-saga/effects";
import { requestRegister } from "./auth-requests";
import { toast } from "react-toastify";

export default function* handleRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestRegister, payload);
    if (response.status === 201) toast.success("Created account successfully");
  } catch (error) {
    console.error(error);
  }
}
