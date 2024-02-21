import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Username required !")
            .min(6, "Username too short !")
            .max(28, "Username too long"),
          password: Yup.string()
            .required("Password required !")
            .min(6, "Password too short !")
            .max(28, "Password too long"),
        })}
        onSubmit={(values, actions) => {
          const value = { ...values };
          window.alert(value);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="login-container">
              <form class="login-form">
                <h1>Welcome Back</h1>
                <p>Please login to your account</p>
                <div class="input-group">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div class="input-group">
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
                <div class="bottom-text">
                  <p>
                    Don't have an account? <a href="#">Sign Up</a>
                  </p>
                  <p>
                    <a href="#">Forgot password?</a>
                  </p>
                </div>
              </form>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
