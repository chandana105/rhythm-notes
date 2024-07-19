import { Col } from "react-bootstrap";
import styles from "./DisplayNotes.module.css";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "./NoteCard";

const DisplayNotes = () => {
  const { notesList } = useSelector((state) => state.note);
  const { selectedLabel } = useSelector((state) => state.label);

  const filteredByLabel = (sortedByTimeList) => {
    return sortedByTimeList.filter((list) => list.label === selectedLabel);
  };

  const sortByTime = (notesList) => {
    return notesList.sort((a, b) => b.lastModified - a.lastModified);
  };

  const sortedByTime = sortByTime([...notesList]);
  const filterByLabel =
    selectedLabel === "" ? sortedByTime : filteredByLabel(sortedByTime);

  const pinnedList = filterByLabel.filter((notes) => notes.pinned === true);
  const othersList = filterByLabel.filter((notes) => notes.pinned === false);

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

// onclick of label :- if
