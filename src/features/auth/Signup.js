import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { UserEmail } from "../../components/Form/UserEmail";
import { UserPassword } from "../../components/Form/UserPassword";
import { FormButton } from "../../components/Form/FormButton";
import { Name } from "../../components/Form/Name";
import { Username } from "../../components/Form/Username";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../components/Toast";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";

const Signup = () => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { status, error, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    token && navigate("/");
  }, [navigate, token]);

  const signupValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be atleast 4 characters")
      .required("Name is required"),
    username: Yup.string()
      .min(4, "Username must be atleast 4 characters")
      .max(20, "Username must not exceed 20 characters length")
      .required("Username is required"),
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
        "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required"),
  });

  const signupHandler = async (e, values) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(signup(values));
      // console.log({ resultAction });
      unwrapResult(resultAction);
      navigate("/login");
      Toast("Signup Successful. Please Login!");
    } catch (err) {
      Toast("Login Failed, Try Again");
      console.log("error");
    }
  };

  return (
    <Container className={styles.signupContainer}>
      <Row className={styles.row}>
        <Col>
          <h1 className={styles.heading}>Rhythmgram</h1>
          {status === "error" && <Alert variant="danger">{error}</Alert>}
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={console.log}
          >
            {(formik) => {
              const { handleChange, values, isValid, dirty, errors } = formik;
              return (
                <Form noValidate onSubmit={(e) => signupHandler(e, values)}>
                  <Name
                    placeholder="Enter Name"
                    value={values.name}
                    changeName={handleChange}
                    isInValidName={!!errors.name}
                  />
                  <Username
                    value={values.username}
                    changeUserName={handleChange}
                    isInValidUsername={!!errors.username}
                  />
                  <UserEmail
                    value={values.email}
                    changeEmail={handleChange}
                    isInValidEmail={!!errors.email}
                  />
                  <UserPassword
                    component="Signup"
                    value={values.password}
                    changePassword={handleChange}
                    isInValidPassword={!!errors.password}
                  />
                  <FormButton
                    text={
                      status === "pending" ? "Loading..." : "Create an account"
                    }
                    isDisabled={!(dirty && isValid && !(status === "pending"))}
                  />
                </Form>
              );
            }}
          </Formik>
          <div className={styles.signup}>
            Already have an account?&nbsp;
            <Link to="/login" className={styles.signupLink}>
              Log in
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

// resultAction:
// meta:
// arg: {name: 'dggh', username: 'egrghg', email: '55@g.com', password: '123@Qazx'}
// requestId: "msGHnyvffMFu9dBvAxDJL"
// requestStatus: "fulfilled"
// [[Prototype]]: Object
// payload:
// message: "User created successfully, Please Login!"
// success: true
// userId: "619f1324d8683b6bf8bac173"
// [[Prototype]]: Object
// type: "auth/signup/fulfilled"
