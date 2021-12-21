import { Navbar, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "./Navigation.module.css";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { selectedLabel } = useSelector((state) => state.label);

  return (
    <Navbar bg="light" variant="light" className={styles.navbar}>
      <Container fluid className={styles.container}>
        <Navbar.Brand className={styles.navBrand}>
          <Link to="/">
            <GrMenu className={styles.menubar} />{" "}
            {selectedLabel === "" ? (
              <>
                <img
                  alt=""
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
                <span className={styles.title}>Rhythm Notes</span>
              </>
            ) : (
              <span className={styles.title}>{selectedLabel}</span>
            )}
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
