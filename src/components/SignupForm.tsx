import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { signupRequest } from 'store/auth/authActions';
import { UserSignupInfo } from 'services/userService';

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const schema = Yup.object<SignupFormValues>({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
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
});

const initialValues: SignupFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

export const SignupForm: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: SignupFormValues) => {
    const signupInfo: UserSignupInfo = {
      name: {
        first: values.firstName,
        last: values.lastName
      },
      email: values.email,
      password: values.password
    };

    dispatch(signupRequest(signupInfo));
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="signup-firstName">
            <Form.Label>
              First name
            </Form.Label>
            <Form.Control type="text" name="firstName" value={values.firstName}
              onChange={handleChange} onBlur={handleBlur}
              isInvalid={touched.firstName && !!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="signup-lastName">
            <Form.Label>
              Last name
            </Form.Label>
            <Form.Control type="text" name="lastName" value={values.lastName}
              onChange={handleChange} onBlur={handleBlur}
              isInvalid={touched.lastName && !!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

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
};
