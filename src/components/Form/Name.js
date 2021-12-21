import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const Name = ({placeholder, value, changeName, isInValidName }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupName">
      <Form.Label className={styles.label}>Name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        placeholder={placeholder}
        minLength="3"
        value={value}
        onChange={changeName}
        isInvalid={isInValidName}
        required
      />
      <Form.Control.Feedback type="invalid">
        Name is required & it must be minimum 3 characters.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
