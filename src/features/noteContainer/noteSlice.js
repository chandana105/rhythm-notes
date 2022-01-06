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
      // let noteList = [{
      // ...action.payload
      // }];

      state.notesList = state.notesList.push(action.payload);
    },
    addNote: (state, action) => {
      console.log("wrking", action.payload);
      const title = state.newNote.title;
      const body = state.newNote.body;
      if (title.length || body.length) {
        // console.log("before", current(state));
        state.notesList.push(action.payload);
        // console.log("after", current(state));
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
    // update proper ie proerty : vslue , color : value, pinned : value, label : value
    updateNoteProperty: (state, action) => {
      // state.notesList ko update krna
      // uski id match krni from payuload.id se
      // then if id match from noteslIst then vo noteslist baki aise ki aise, jis noteid ki id match hui, uski action.proprrty : action.value
      // console.log(action.payload);
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
  },
});

export const {
  setNewNoteFlag,
  setNewNote,
  setNotesList,
  addNote,
  updateNoteProperty,
  deleteNote
} = noteSlice.actions;

export default noteSlice.reducer;

// lets make default note

// state.notesList = [
//   {
//     ...state.notesList,
//     ...action.payload,
//   },
// ];
