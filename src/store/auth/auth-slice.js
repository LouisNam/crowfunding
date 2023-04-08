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
  },
});

export const { login, register, updateUser } = authSlice.actions;
export default authSlice.reducer;
