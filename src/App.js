import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, updateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";

Modal.setAppElement("#root");

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const { refresh_token, access_token } = getToken();
    if (user && user.id) {
      dispatch(updateUser({ user, accessToken: access_token }));
    } else {
      if (refresh_token) {
        dispatch(refreshToken(refresh_token));
      } else {
        dispatch(updateUser({}));
        logOut();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <></>;
}

export default App;
