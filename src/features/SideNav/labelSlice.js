import { createSlice } from "@reduxjs/toolkit";

const labelSlice = createSlice({
  name: "label",
  initialState: {
    labelList: ["None", "Important", "Todo"],
    selectedLabel: "",
    label: "",
    showModal: false,
  },
  reducers: {
    labelSelected: (state, action) => {
      state.selectedLabel = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
    setShowModal: (state, action) => {
      console.log(action.payload)
      state.showModal = action.payload;
    },
  },
});

export const { labelSelected, setLabel , setShowModal } = labelSlice.actions;

export default labelSlice.reducer;
