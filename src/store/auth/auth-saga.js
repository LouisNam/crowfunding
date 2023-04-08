import { takeLatest } from "redux-saga/effects";
import { login, register } from "./auth-slice";
import handleRegister, { handleLogin } from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(register.type, handleRegister);
  yield takeLatest(login.type, handleLogin);
}
