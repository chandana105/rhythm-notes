import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setShowEditModal } from "../../features/noteContainer/noteSlice";
import styles from "./EditModal.module.css";
import noteStyles from "../Note/NoteBody.module.css";
import noteCardStyles from "./NoteCard.module.css";
import labelStyles from "../DisplayNotes/NoteFooterHelpers/LabelSelector.module.css";
import { BsPin, BsPinFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useRef, useEffect } from "react";
import {
  updateNoteProperty,
  deleteNote,
  setEditNote,
} from "../../features/noteContainer/noteSlice";

const EditModal = () => {
  const { showEditModal, editNote } = useSelector((state) => state.note);
  const { labelList } = useSelector((state) => state.label);

  const dispatch = useDispatch();
  const inputEl = useRef(null);
  useEffect(() => inputEl.current && inputEl.current.focus(), [inputEl]);

  const updateEditNote = (id, propertyName, propertyValue) => {
    dispatch(
      updateNoteProperty({
        id: id,
        property: propertyName,
        value: propertyValue,
      })
    );
    dispatch(
      setEditNote({
        id: id,
        property: propertyName,
        value: propertyValue,
      })
    );
  };

  const closeModal = () => {
    dispatch(setShowEditModal(false));
    dispatch(
      setEditNote({
        id: null,
      })
    );
  };

  const deleteNoteFromList = (noteId) => {
    dispatch(
      deleteNote({
        id: noteId,
      })
    );
    closeModal();
  };

  return (
    <Modal show={showEditModal} centered onHide={() => closeModal()}>
      <div
        style={{ background: `${editNote.color} ` }}
        className={styles.noteTaker}
      >
        {/* <NoteTitle /> */}
        <div className={styles.title}>
          <Form.Control
            as="textarea"
            className={noteStyles.noteTitle}
            style={{ background: `${editNote.color} ` }}
            placeholder="Title"
            value={editNote.title}
            onChange={(e) => {
              updateEditNote(editNote.id, "title", e.target.value);
              updateEditNote(editNote.id, "lastEdited", Date.now());
            }}
          />

          <button
            className={styles.notePin}
            onClick={() =>
              updateEditNote(editNote.id, "pinned", !editNote.pinned)
            }
          >
            {editNote.pinned ? (
              <BsPinFill size={30} title="PinNote" />
            ) : (
              <BsPin size={30} title="PinNote" />
            )}
          </button>
        </div>
        {/* /* <NoteBody /> */}
        <Form.Control
          as="textarea"
          ref={inputEl}
          placeholder="Take a note..."
          className={styles.textArea}
          style={{ background: `${editNote.color} ` }}
          onChange={(e) => {
            updateEditNote(editNote.id, "body", e.target.value);
            updateEditNote(editNote.id, "lastEdited", Date.now());
          }}
          value={editNote.body}
        />

        {/* footer */}
        <div
          className={noteStyles.noteFooter}
          style={{ background: `${editNote.color} ` }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={noteCardStyles.footer}>
            {/* label */}
            <div className={labelStyles.addLabel}>
              <span>
                {editNote.label === "None" || editNote.label === ""
                  ? "Add Label"
                  : editNote.label}
              </span>
              <div className={labelStyles.labelOptions}>
                {labelList.map((label) => (
                  <div
                    className={labelStyles.labelSelect}
                    onClick={() =>
                      label === "None"
                        ? updateEditNote(editNote.id, "label", "")
                        : updateEditNote(editNote.id, "label", label)
                    }
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* <ColorPicker*/}
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue={editNote.color}
              title="Choose your color"
              className={styles.colorPicker}
              onChange={(e) =>
                updateEditNote(editNote.id, "color", e.target.value)
              }
            />

            <MdDelete
              size={30}
              className={noteCardStyles.delete}
              title="Delete note"
              onClick={() => deleteNoteFromList(editNote.id)}
            />
            <Button
              className={styles.close}
              onClick={() => dispatch(setShowEditModal(false))}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
