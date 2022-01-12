import { Container, Row } from "react-bootstrap";

import styles from "./NoteContainer.module.css";

import NewNote from "./NewNote";
import DisplayNotes from "../../components/DisplayNotes/DisplayNotes";

const NoteContainer = () => {
  return (
    <Container>
      <Row
        className="justify-content-center"
        onClick={(e) => e.stopPropagation()}
      >
        <NewNote />
      </Row>
      <Row className={styles.displayNotes}>
        <DisplayNotes />
      </Row>
    </Container>
  );
};

export default NoteContainer;


