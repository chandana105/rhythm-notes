import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const Location = ({ value, changeLocation }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupLocation">
      <Form.Label className={styles.label}>Location</Form.Label>
      <Form.Control
        type="text"
        name="location"
        value={value}
        onChange={changeLocation}
      />
    </Form.Group>
  );
};
