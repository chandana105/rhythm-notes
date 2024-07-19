import styles from "./LabelSelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewNote,
  updateNoteProperty,
} from "../../../features/noteContainer/noteSlice";

const LabelSelector = ({ note }) => {
  const { labelList } = useSelector((state) => state.label);
  const dispatch = useDispatch();

  //   note k iid came from notecard , id : note.id, protpy:"lable" , value: jo labelname yhaan selected

  const changeLabel = (labelName, noteId) => {
    if (labelName === "None") {
      dispatch(
        updateNoteProperty({
          id: noteId,
          property: "label",
          value: "",
        })
      );
    } else {
      dispatch(
        updateNoteProperty({
          id: noteId,
          property: "label",
          value: labelName,
        })
      );
    }
  };

  //   agr setnewnote undef tb setthe noteslsit else , setnote ,
  return (
    <div className={styles.addLabel}>
      <span>
        {note.label === "None" || note.label === "" ? "Add Label" : note.label}
      </span>
      <div className={styles.labelOptions}>
        {labelList.map((label) => (
          <div
            className={styles.labelSelect}
            onClick={() => changeLabel(label, note.id)}
            key={label}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelSelector;
