import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { UserEmail } from "../../components/Form/UserEmail";
import { UserPassword } from "../../components/Form/UserPassword";
import { FormButton } from "../../components/Form/FormButton";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../components/Toast";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { status, error, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    token && navigate("/");
  }, [navigate, token]);

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must Contain 8 Characters")
      .required("Password is required"),
  });

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(signin(values));
      unwrapResult(resultAction);
      Toast("Login Successfull!");
      navigate("/");
    } catch (err) {
      Toast("Login Failed, Try Again");
      console.log(err);
    }
  };

  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <Col>
          <h1 className={styles.heading}>Rhythmgram</h1>
          {status === "error" && <Alert variant="danger">{error}</Alert>}
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={console.log}
          >
            {(formik) => {
              const { handleChange, values, isValid, dirty, errors } = formik;
              return (
                <Form noValidate onSubmit={(e) => handleSubmit(e, values)}>
                  <UserEmail
                    value={values.email}
                    changeEmail={handleChange}
                    isInValidEmail={!!errors.email}
                  />
                  <UserPassword
                    component="Login"
                    value={values.password}
                    changePassword={handleChange}
                    isInValidPassword={!!errors.password}
                  />
                  <FormButton
                    text={status === "pending" ? "Loading..." : "Log in"}
                    isDisabled={!(dirty && isValid && !(status === "pending"))}
                  />
                </Form>
              );
            }}
          </Formik>
          <div className={styles.signup}>
            Don't have an account?&nbsp;
            <Link to="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// https://react-bootstrap.netlify.app/components/forms/#forms-validation
// https://react-bootstrap.github.io/components/forms/?#forms-floating-labels-customize
// https://react-bootstrap.github.io/components/forms/?#forms-floating-labels
