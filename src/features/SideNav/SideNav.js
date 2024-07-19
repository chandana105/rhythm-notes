import styles from "./SideNav.module.css";
import { AiOutlineBulb } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { RiPencilLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { labelSelected, setLabel, setShowModal } from "./labelSlice";
import EditLabel from "./EditLabel";


const SideNav = () => {
  const { labelList, selectedLabel, label, showModal } = useSelector(
    (state) => state.label
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.sideBar}>
      <div
        className={selectedLabel === "" ? styles.labelActive : styles.label}
        onClick={() => dispatch(labelSelected(label))}
      >
        <AiOutlineBulb size={30} className={styles.icon} /> Notes
      </div>
      {labelList.map((label) => {
        if (label !== "None") {
          return (
            <div
              className={
                label === selectedLabel ? styles.labelActive : styles.label
              }
              key={label}
              onClick={() => dispatch(labelSelected(label))}
            >
              <MdLabelOutline size={30} className={styles.icon} /> {label}
            </div>
          );
        }
      })}

      {showModal ? <EditLabel /> : null}

      <div
        className={styles.label}
        onClick={() => dispatch(setShowModal(true))}
      >
        <RiPencilLine size={30} className={styles.icon} /> Add Label
      </div>
    </div>
  );
};

export default SideNav;
