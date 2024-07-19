import noteStyles from "./NoteBody.module.css";
import styles from "./NoteFooter.module.css";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewNote,
  setNewNoteFlag,
} from "../../features/noteContainer/noteSlice";
import { v4 as uuidv4 } from "uuid";
import LabelSelector from "./NoteFooterHelpers/LabelSelector";
import ColorPicker from "./NoteFooterHelpers/ColorPicker";

const NoteFooter = () => {
  const { newNote, notesList } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const deleteNote = () => {
    if (!(newNote.id in notesList)) {
      dispatch(setNewNoteFlag(false));
      dispatch(
        setNewNote({
          id: uuidv4(),
          title: "",
          body: "",
          label: "",
          color: "#ffffff",
          pinned: false,
        })
      );
    }
  };

  return (
    <div
      className={noteStyles.noteFooter}
      style={{ background: `${newNote.color} ` }}
    >
      <div className={styles.footer}>
        <LabelSelector />

        <ColorPicker />

        <MdDelete
          size={30}
          className={styles.delete}
          title="Delete note"
          onClick={deleteNote}
        />
      </div>
    </div>
  );
};

export default NoteFooter;
