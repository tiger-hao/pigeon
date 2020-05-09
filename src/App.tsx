import React from 'react';
import { Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Routes } from 'constants/routes';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { GuestRoute } from 'components/Routes/GuestRoute';
import { LoginPage } from 'pages/LoginPage';
import { SignupPage } from 'pages/SignupPage';
import { MessagesPage } from 'pages/MessagesPage';

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
          <MessagesPage />
        </PrivateRoute>

        <GuestRoute path={Routes.LOGIN}>
          <LoginPage />
        </GuestRoute>

        <GuestRoute path={Routes.SIGNUP}>
          <SignupPage />
        </GuestRoute>
      </Switch>
    </div>
  );
};

export default App;
