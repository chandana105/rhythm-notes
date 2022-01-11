import { createSlice , current} from "@reduxjs/toolkit";

const labelSlice = createSlice({
  name: "label",
  initialState: {
    labelList: ["None", "Important", "Todo"],
    selectedLabel: "",
    label: "",
    showModal: false,
    newLabel: "",
  },
  reducers: {
    labelSelected: (state, action) => {
      state.selectedLabel = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setNewLabel: (state, action) => {
      state.newLabel = action.payload;
    },
    addNewLabel: (state, action) => {
      state.labelList.push(action.payload);
    },
  },
});

export const {
  labelSelected,
  setLabel,
  setShowModal,
  setNewLabel,
  addNewLabel,
} = labelSlice.actions;

export default labelSlice.reducer;

