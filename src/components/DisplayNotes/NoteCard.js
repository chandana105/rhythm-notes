import { Col } from "react-bootstrap";
import styles from "./NoteCard.module.css";
import NoteFooter from "../Note/NoteFooter";
import noteStyles from "../Note/NoteBody.module.css";
import { BsPin, BsPinFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  updateNoteProperty,
  deleteNote,
} from "../../features/noteContainer/noteSlice";
import LabelSelector from "./NoteFooterHelpers/LabelSelector";
import ColorPicker from "./NoteFooterHelpers/ColorPicker";
import { MdDelete } from "react-icons/md";

const NoteCard = ({ newNotesList }) => {
  const { id, color, title, pinned, body } = newNotesList;
  const dispatch = useDispatch();

  const togglePin = (id) => {
    dispatch(
      updateNoteProperty({
        id: id,
        property: "pinned",
        value: !pinned,
      })
    );
  };

  const deleteNoteFromList = (noteId) => {
    dispatch(
      deleteNote({
        id: noteId,
      })
    );
  };

  // fidn krna pehle yeh id from noteslist then uski pined proper toggle krni
  return (
    <Col className={styles.card} key={id} style={{ background: `${color} ` }}>
      <div className={styles.title}>
        <div className={styles.cardTitle}>{title}</div>

        <button className={styles.cardPin} onClick={() => togglePin(id)}>
          {pinned ? (
            <BsPinFill size={30} title="PinNote" />
          ) : (
            <BsPin size={30} title="PinNote" />
          )}
        </button>
      </div>
      <p className={styles.cardBody}>
        {body}
        {id}
      </p>
      <div className={styles.cardFooter} onClick={(e) => e.stopPropagation()}>
        <div
          className={noteStyles.noteFooter}
          style={{ background: `${color} ` }}
        >
          <div className={styles.footer}>
            <LabelSelector note={newNotesList} />

            <ColorPicker note={newNotesList} />

            <MdDelete
              size={30}
              className={styles.delete}
              title="Delete note"
              onClick={() => deleteNoteFromList(id)}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NoteCard;

// text ki leng as in donw in rhytm strore
