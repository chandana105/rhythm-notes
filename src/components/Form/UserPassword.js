import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const UserPassword = ({
  component,
  value,
  changePassword,
  isInValidPassword,
}) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label className={styles.label}>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        minLength="8"
        placeholder="Enter Password"
        aria-describedby="passwordHelpBlock"
        value={value}
        onChange={changePassword}
        isInvalid={isInValidPassword}
        required
      />
      <Form.Control.Feedback type="invalid">
        {component === "Login"
          ? "Password must Contain 8 Characters"
          : "    Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
