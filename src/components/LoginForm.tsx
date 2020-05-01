import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Enter your email"),
  password: Yup.string()
    .required("Enter your password")
})

export const LoginForm: React.FC = () => (
  <Formik
    validationSchema={schema}
    initialValues={{
      email: "",
      password: ""
    }}
    onSubmit={values => {
      alert(JSON.stringify(values));
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="login-email">
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

        <Form.Group controlId="login-password">
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

        <Button type="submit">
          Log In
        </Button>
      </Form>
    )}
  </Formik>
);
