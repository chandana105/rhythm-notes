import { Col } from "react-bootstrap";
import styles from "./DisplayNotes.module.css";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "./NoteCard";

const DisplayNotes = () => {
  const { notesList } = useSelector((state) => state.note);

  const pinnedList = notesList.filter((notes) => notes.pinned === true);
  const othersList = notesList.filter((notes) => notes.pinned === false);

  console.log({ notesList });
  return (
    <>
      <Col>
        {pinnedList.length !== 0 && <h4>Pinned</h4>}
        <div className={styles.noteDisplay}>
          {pinnedList.map((pinList) => (
            <NoteCard newNotesList={pinList} key={pinList.id} />
          ))}
        </div>
      </Col>
      <Col>
        {othersList.length !== 0 && <h4>Others</h4>}
        <div className={styles.noteDisplay}>
          {othersList.map((otherList) => (
            <NoteCard newNotesList={otherList} key={otherList.id} />
          ))}
        </div>
      </Col>
    </>
  );
};

export default DisplayNotes;

// noteslist sari show krni hai, but on rhythm notes pg ie on home pg , notes ki ids filter out jinke pinned s true, nd baki in others.nd jo filter honge thT LL BE  arr, uss arr ko map krna
