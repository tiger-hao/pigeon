import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import { AuthForm, FormField } from 'components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'store/auth/authActions';
import { Routes } from 'constants/routes';
import { RootState } from 'store/rootReducer';

interface LoginFormValues {
  email: string;
  password: string;
}

const schema = Yup.object<LoginFormValues>({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Enter your password")
}).defined();

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
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);

  const dispatch = useDispatch();
  const onSubmit = (values: LoginFormValues, { setErrors }: FormikHelpers<LoginFormValues>) => {
    dispatch(loginRequest(values, setErrors));
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
      loading={loading}
      error={error}
    />
  );
};
