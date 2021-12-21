import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const UserEmail = ({ value, isInValidEmail, changeEmail }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label className={styles.label}>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        placeholder="Enter Email"
        value={value}
        onChange={changeEmail}
        isInvalid={isInValidEmail}
        required
      />
      <Form.Control.Feedback type={"invalid"}>
        Please provide a valid email
      </Form.Control.Feedback>
    </Form.Group>
  );
};
