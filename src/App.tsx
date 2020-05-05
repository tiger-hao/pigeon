import React from 'react';
import { Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes } from 'constants/routes';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { GuestRoute } from 'components/Routes/GuestRoute';
import { AuthPage } from 'pages/AuthPage';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Pigeon</b>
      </header>
      <NavigationBar />
      <Switch>
        <PrivateRoute exact path={Routes.HOME}>
          <div>Logged in</div>
        </PrivateRoute>

        <GuestRoute path={Routes.LOGIN}>
          <AuthPage header="Sign in">
            <LoginForm />
          </AuthPage>
        </GuestRoute>

        <GuestRoute path={Routes.SIGNUP}>
          <AuthPage header="Sign up">
            <SignupForm />
          </AuthPage>
        </GuestRoute>
      </Switch>
    </div>
  );
};

export default App;
