import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    newNoteFlag: false,
    newNote: {
      id: uuidv4(),
      title: "",
      body: "",
      label: "",
      color: "#ffffff",
      pinned: false,
      lastModified: Date.now(),
      lastEdited: Date.now(),
    },
    notesList: [],
    showEditModal: false,
    editNote: {},
  },
  reducers: {
    setNewNoteFlag: (state, action) => {
      state.newNoteFlag = action.payload;
    },
    setNewNote: (state, action) => {
      let note = {
        ...state.newNote,
        ...action.payload,
      };
      state.newNote = note;
    },
    setNotesList: (state, action) => {
      state.notesList = state.notesList.push(action.payload);
    },
    addNote: (state, action) => {
      const title = state.newNote.title.trim();
      const body = state.newNote.body.trim();
      if (title.length || body.length) {
        state.notesList.push(action.payload);
      }
      state.newNote = {
        id: uuidv4(),
        title: "",
        body: "",
        label: "",
        color: "#ffffff",
        pinned: false,
        lastModified: Date.now(),
        lastEdited: Date.now(),
      };
      state.newNoteFlag = false;
    },
    // notecard pr click kiya,  toh jo bhi note ki details thi in notecard, vo daal diya in editnote, ie editnote = acton.pyload , then vo editnote k isari detasl aagyi edoitmodel mein, now ab , har ksiispe onchange toh we want ki ab vo onchange pr updatenotepropert call ki , ab notelst se id match hui as of editnote then partclt prort uodate hogyi
    updateNoteProperty: (state, action) => {
      state.notesList = state.notesList.map((note) =>
        note.id === action.payload.id
          ? { ...note, [action.payload.property]: action.payload.value }
          : { ...note }
      );
    },
    deleteNote: (state, action) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload.id
      );
    },
    setShowEditModal: (state, action) => {
      // // console.log(action.payload ,'pxdv')
      //  console.log("before", current(state));
      state.showEditModal = action.payload;
      //  console.log("after", current(state));
    },
    setEditNote: (state, action) => {
      state.editNote =
        state.editNote.id === action.payload.id
          ? {
              ...state.editNote,
              [action.payload.property]: action.payload.value,
            }
          : { ...action.payload.note };
    },
  },
});

// set mein aise krnege , if agr jo id aarhi filter krkestateleditnote.id === action.payload.id then just update krenge vohi proptty else, as it is as, vo note dalanege

export const {
  setNewNoteFlag,
  setNewNote,
  setNotesList,
  addNote,
  updateNoteProperty,
  deleteNote,
  setShowEditModal,
  setEditNote,
} = noteSlice.actions;

export default noteSlice.reducer;
