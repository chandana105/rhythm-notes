import { Button } from "react-bootstrap";
import styles from "../../features/auth/Auth.module.css";

export const FormButton = ({ text, isDisabled }) => {
  return (
    <Button
      variant="primary"
      type="submit"
      className={styles.button}
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
};
