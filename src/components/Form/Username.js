import { Form, InputGroup } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const Username = ({ value, changeUserName, isInValidUsername }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupUsername">
      <Form.Label className={styles.label}>Username</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          name="username"
          value={value}
          onChange={changeUserName}
          isInvalid={isInValidUsername}
          required
        />
        <Form.Control.Feedback type="invalid">
          Username must be atleast 4 characters
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};
