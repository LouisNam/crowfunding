import { takeLatest } from "redux-saga/effects";
import { register } from "./auth-slice";
import handleRegister from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(register.type, handleRegister);
}
