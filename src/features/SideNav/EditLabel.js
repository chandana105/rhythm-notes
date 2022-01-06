import { Modal, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewLabel, setNewLabel, setShowModal } from "./labelSlice";
import styles from "./EditLabel.module.css";
import { useRef, useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";

const EditLabel = () => {
  const { showModal, newLabel } = useSelector((state) => state.label);
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  useEffect(() => inputEl.current && inputEl.current.focus());

  const addLabel = () => {
    if (newLabel !== "") {
      dispatch(addNewLabel(newLabel));
    }
    dispatch(setShowModal(false));
    dispatch(setNewLabel(""));
  };

  return (
    <Modal
      size="sm"
      show={showModal}
      centered
      onHide={() => {
        dispatch(setShowModal(false));
        dispatch(setNewLabel(""));
      }}
    >
      <Modal.Header>
        <Modal.Title>Add Label</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <FormControl
          ref={inputEl}
          aria-label="new Label"
          placeholder="New Label"
          className={styles.input}
          value={newLabel}
          onChange={(e) => dispatch(setNewLabel(e.target.value))}
        />{" "}
        <BsCheck2 size={30} className={styles.check} onClick={addLabel} />
      </Modal.Body>
    </Modal>
  );
};

export default EditLabel;
