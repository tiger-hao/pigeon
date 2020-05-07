import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { AuthForm, FormField } from 'components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from 'store/auth/authActions';
import { UserSignupInfo } from 'services/userService';
import { Routes } from 'constants/routes';
import { RootState } from 'store/rootReducer';

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

const fields: FormField<SignupFormValues>[] = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    initialValue: ""
  },
  {
    name: "email",
    type: "text",
    label: "Last name",
    initialValue: ""
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    initialValue: ""
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    initialValue: ""
  },
  {
    name: "passwordConfirmation",
    type: "password",
    label: "Confirm password",
    initialValue: ""
  }
];

export const SignupPage: React.FC = () => {
  const loading = useSelector((state: RootState) => state.auth.loading);
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
    <AuthForm
      title={"Sign up"}
      fields={fields}
      validationSchema={schema}
      redirectElement={(
        <Button component={Link} to={Routes.SIGNUP} color="primary">
          Sign in instead
        </Button>
      )}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
