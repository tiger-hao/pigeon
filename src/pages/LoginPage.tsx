import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { AuthForm, FormField } from 'components/AuthForm';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'store/auth/authActions';
import { Routes } from 'constants/routes';

interface LoginFormValues {
  email: string;
  password: string;
}

const schema = Yup.object<LoginFormValues>({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Enter your password")
});

const fields: FormField<LoginFormValues>[] = [
  {
    name: "email",
    type: "text",
    label: "Email",
    autoComplete: "email",
    initialValue: ""
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    autoComplete: "current-password",
    initialValue: ""
  }
];

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: LoginFormValues) => {
    dispatch(loginRequest(values));
  };

  return (
    <AuthForm
      title={"Sign in"}
      fields={fields}
      validationSchema={schema}
      redirectElement={(
        <Button component={Link} to={Routes.SIGNUP} color="primary">
          Sign up instead
        </Button>
      )}
      onSubmit={onSubmit}
    />
  );
};
