import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NoteBody from "../../components/Note/NoteBody";
import styles from "./NoteContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import NoteTitle from "../../components/Note/NoteTitle";
import NoteFooter from "../../components/Note/NoteFooter";
import { addNote } from "./noteSlice";

const NewNote = () => {
  const { newNoteFlag, newNote } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  return (
    <Col
      className={styles.noteTaker}
      style={{ background: `${newNote.color} ` }}
    >
      <div className={newNoteFlag ? styles.noteOpen : styles.noteClose}>
        <NoteTitle />
      </div>
      <NoteBody />
      <div className={newNoteFlag ? styles.noteOpen : styles.noteClose}>
        <NoteFooter />
        <Button className={styles.close} onClick={() => dispatch(addNote(newNote))}>
          Close
        </Button>
      </div>
    </Col>
  );
};

export default NewNote;

// on click pr newnoteflag, thren expand vnote

// ek iv bnana jiske andar noteboy an notetilte
