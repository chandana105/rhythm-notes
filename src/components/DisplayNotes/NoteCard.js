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
import {
  setShowEditModal,
  setEditNote,
} from "../../features/noteContainer/noteSlice";

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

  const trimNoteBody = (body) => {
    const len = 190;
    return body.length > len ? body.substring(0, len) + "..." : body;
  };

  const displayEditModal = () => {
    dispatch(setShowEditModal(true));
    dispatch(
      setEditNote({
        id: id,
        note: newNotesList,
      })
    );
  };

  // yhaan pr note set krdia, but vhaan pr

  return (
    <Col
      className={styles.card}
      key={id}
      style={{ background: `${color} ` }}
      onClick={() => displayEditModal()}
    >
      <div className={styles.title}>
        <div className={styles.cardTitle}>{title}</div>

        <button
          className={styles.cardPin}
          onClick={(e) => {
            togglePin(id);
            e.stopPropagation();
          }}
        >
          {pinned ? (
            <BsPinFill size={30} title="PinNote" />
          ) : (
            <BsPin size={30} title="PinNote" />
          )}
        </button>
      </div>
      <p className={styles.cardBody}>{trimNoteBody(body)}</p>
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

// on click of notecard , edirmodel shown, usme, note hoga with default vaue as notecard mein ,complete body to show baki sari editing feautres vsame, jsut ab title and body krna edit
