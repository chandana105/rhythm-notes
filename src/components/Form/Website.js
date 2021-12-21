import { Form } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const Website = ({ value, changeWebsite, isInValidWebsite }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupWebsite">
      <Form.Label className={styles.label}>Website</Form.Label>
      <Form.Control
        type="url"
        name="website"
        value={value}
        onChange={changeWebsite}
        isInvalid={isInValidWebsite}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please Enter valid url 'www.example.com'
      </Form.Control.Feedback>
    </Form.Group>
  );
};
