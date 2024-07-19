import Navigation from "../../components/Navigation/Navigation";
import SideNav from "../SideNav/SideNav";
import NoteContainer from "../noteContainer/NoteContainer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewNoteFlag,
  addNote,
} from "../../features/noteContainer/noteSlice";
import EditModal from "../../components/DisplayNotes/EditModal";

const Home = () => {
  const { newNoteFlag, newNote, showEditModal } = useSelector(
    (state) => state.note
  );

  const dispatch = useDispatch();

  const saveOnOutOfFocus = () => {
    if (newNoteFlag) {
      dispatch(addNote(newNote));
    }
  };

  return (
    <div onClick={saveOnOutOfFocus}>
      {showEditModal ? <EditModal /> : null}

      <Navigation />
      <Container fluid>
        <Row>
          <Col md={4} className={styles.sideNav}>
            <SideNav />
          </Col>
          <Col>
            <NoteContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
