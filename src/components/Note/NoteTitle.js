import { Button, Form } from "react-bootstrap";
import noteStyles from "./NoteBody.module.css";
import styles from "./NoteTitle.module.css";
import { BsPin, BsPinFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setNewNote } from "../../features/noteContainer/noteSlice";

const NoteTitle = () => {
  const { newNote } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const saveNoteTitle = (e) => {
    dispatch(
      setNewNote({
        title: e.target.value,
        lastEdited: Date.now(),
      })
    );
  };

  const togglePin = () => {
    dispatch(
      setNewNote({
        pinned: !newNote.pinned,
        lastModified: Date.now(),
      })
    );
  };


  return (
    <div className={styles.title}>
      <Form.Control
        as="textarea"
        className={noteStyles.noteTitle}
        style={{ background: `${newNote.color} ` }}
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => saveNoteTitle(e)}
      />
      <button
        className={styles.notePin}
        onClick={togglePin}
      >
        {newNote.pinned ? (
          <BsPinFill size={30} title="PinNote" />
        ) : (
          <BsPin size={30} title="PinNote" />
        )}
      </button>
    </div>
  );
};

export default NoteTitle;

// onclick BsPinFill
