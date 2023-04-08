const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    register: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    fetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    refreshToken: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    logOut: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { login, register, updateUser, fetchMe, refreshToken, logOut } =
  authSlice.actions;
export default authSlice.reducer;
