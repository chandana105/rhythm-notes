import { Form } from "react-bootstrap";
import styles from "./NoteBody.module.css";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewNoteFlag,
  setNewNote,
} from "../../features/noteContainer/noteSlice";

const NoteBody = () => {
  const inputEl = useRef(null);

  useEffect(() => inputEl.current && inputEl.current.focus(), [inputEl]);
  

  const { newNoteFlag, newNote } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const expandNewNote = () => {
    if (newNoteFlag !== undefined) {
      dispatch(setNewNoteFlag(true));
    }
  };

  const saveNoteBody = (e) => {
    expandNewNote();
    dispatch(
      setNewNote({
        body: e.target.value,
        lastEdited: Date.now(),
      })
    );
  };
  return (
    <Form>
      <Form.Group
        className={`${newNoteFlag && "mb-1"}`}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          ref={inputEl}
          as="textarea"
          placeholder="Take a note..."
          className={styles.textArea}
          style={{ background : `${newNote.color} ` }}
          onClick={expandNewNote}
          onChange={(e) => saveNoteBody(e)}
          value={newNote.body}
        />
      </Form.Group>
    </Form>
  );
};

export default NoteBody;
