import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { isLoggedIn: false, idToken: "", dataChange: false };
const authSlice = createSlice({
  name: "authState",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.idToken = "";
    },
    login(state) {
      state.isLoggedIn = true;
    },
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    toggleDataChange(state) {
      state.dataChange = !state.dataChange;
    },
  },
});
const store = configureStore({
  reducer: authSlice.reducer,
});
export const authActions = authSlice.actions;
export default store;
