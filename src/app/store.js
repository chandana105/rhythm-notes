import { configureStore } from "@reduxjs/toolkit";
import labelReducer from "../features/SideNav/labelSlice";
import noteReducer from "../features/noteContainer/noteSlice";

export const store = configureStore({
  reducer: {
    label: labelReducer,
    note: noteReducer,
  },
});
