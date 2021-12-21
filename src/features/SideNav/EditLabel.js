import { Modal, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "./labelSlice";
import styles from "./EditLabel.module.css";
import { useRef, useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";

const EditLabel = (input) => {
  const { showModal } = useSelector((state) => state.label);
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  useEffect(() => inputEl.current && inputEl.current.focus());
  return (
    <Modal
      show={showModal}
      onHide={() => dispatch(setShowModal(false))}
      className={styles.modal}
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
        />{" "}
        <BsCheck2 size={30} />
      </Modal.Body>
    </Modal>
  );
};

export default EditLabel;
