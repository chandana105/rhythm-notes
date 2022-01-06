import { Form } from "react-bootstrap";
import styles from "./ColorPicker.module.css";
import { setNewNote } from "../../../features/noteContainer/noteSlice";
import { useDispatch, useSelector } from "react-redux";

const ColorPicker = () => {
  const { newNote } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const saveNoteColor = (e) => {
    dispatch(
      setNewNote({
        color: e.target.value,
      })
    );
  };
  return (
    <Form.Control
      type="color"
      id="exampleColorInput"
      defaultValue={newNote.color}
      title="Choose your color"
      className={styles.colorPicker}
      onChange={(e) => saveNoteColor(e)}
    />
  );
};

export default ColorPicker;
