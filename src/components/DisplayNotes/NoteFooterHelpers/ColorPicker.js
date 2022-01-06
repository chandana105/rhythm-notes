import { Form } from "react-bootstrap";
import styles from "./ColorPicker.module.css";
import { updateNoteProperty } from "../../../features/noteContainer/noteSlice";
import { useDispatch } from "react-redux";

const ColorPicker = ({ note }) => {
  const dispatch = useDispatch();

  const changeNoteColor = (e, noteId) => {
    dispatch(
      updateNoteProperty({
        id: noteId,
        property: "color",
        value: e.target.value,
      })
    );
  };
  return (
    <Form.Control
      type="color"
      id="exampleColorInput"
      defaultValue={note.color}
      title="Choose your color"
      className={styles.colorPicker}
      onChange={(e) => changeNoteColor(e, note.id)}
    />
  );
};

export default ColorPicker;
