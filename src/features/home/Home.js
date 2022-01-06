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

const Home = () => {
  const { newNoteFlag, newNote } = useSelector((state) => state.note);

  const dispatch = useDispatch();

  const saveOnOutOfFocus = () => {
    if (newNoteFlag) {
      dispatch(addNote(newNote));
    }
  };

  const noteOpen = () => {
    if (!newNoteFlag) {
      dispatch(setNewNoteFlag(true));
    }
  };

  return (
    <div onClick={saveOnOutOfFocus}>
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
