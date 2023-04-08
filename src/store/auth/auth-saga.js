import { takeLatest } from "redux-saga/effects";
import { login, refreshToken, register } from "./auth-slice";
import handleRegister, {
  handleLogin,
  handleRefreshToken,
} from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(register.type, handleRegister);
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(refreshToken.type, handleRefreshToken);
}
