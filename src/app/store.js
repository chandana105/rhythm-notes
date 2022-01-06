import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import labelReducer from "../features/SideNav/labelSlice";
import noteReducer from "../features/noteContainer/noteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    label: labelReducer,
    note: noteReducer,
  },
});
