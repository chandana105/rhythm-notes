import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const Bio = ({ value, changeBio }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label className={styles.label}>Bio</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="bio"
        value={value}
        onChange={changeBio}
      />
    </Form.Group>
  );
};
