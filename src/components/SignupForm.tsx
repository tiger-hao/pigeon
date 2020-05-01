import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters long")
    .matches(/\d/, "Must contain a number")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required")
})

export const SignupForm: React.FC = () => (
  <Formik
    validationSchema={schema}
    initialValues={{
      email: "",
      password: "",
      passwordConfirmation: ""
    }}
    onSubmit={values => {
      alert(JSON.stringify(values));
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="signup-email">
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control type="email" name="email" value={values.email}
            onChange={handleChange} onBlur={handleBlur}
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="signup-password">
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control type="password" name="password" value={values.password}
            onChange={handleChange} onBlur={handleBlur}
            isInvalid={touched.password && !!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="signup-password-confirmation">
          <Form.Label>
            Confirm Password
          </Form.Label>
          <Form.Control type="password" name="passwordConfirmation" value={values.passwordConfirmation}
            onChange={handleChange} onBlur={handleBlur}
            isInvalid={touched.passwordConfirmation && !!errors.passwordConfirmation}
          />
          <Form.Control.Feedback type="invalid">
            {errors.passwordConfirmation}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">
          Sign Up
        </Button>
      </Form>
    )}
  </Formik>
);
