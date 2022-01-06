import styles from "./LabelSelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNewNote } from "../../../features/noteContainer/noteSlice";

const LabelSelector = () => {
  const { labelList } = useSelector((state) => state.label);
  const { newNote } = useSelector((state) => state.note);

  const dispatch = useDispatch();

  const selectLabel = (labelName) => {
    if (labelName === "None") {
      dispatch(
        setNewNote({
          label: "",
        })
      );
    } else {
      dispatch(
        setNewNote({
          label: labelName,
        })
      );
    }
  };
  return (
    <div className={styles.addLabel}>
      <span>
        {newNote.label === "None" || newNote.label === ""
          ? "Add Label"
          : newNote.label}
      </span>
      <div className={styles.labelOptions}>
        {labelList.map((label) => (
          <div
            className={styles.labelSelect}
            onClick={() => selectLabel(label)}
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
