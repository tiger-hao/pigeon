import React from 'react';
import Box from '@material-ui/core/Box';
import { Switch, Redirect } from 'react-router-dom';
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
    <Box display="flex" flexDirection="column" height="100vh">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Pigeon</b>
      </header>
      <NavigationBar />

      <Switch>
        <PrivateRoute path={`${Routes.MESSAGES}/:conversationId?`}>
          <MessagesPage />
        </PrivateRoute>

        <GuestRoute path={Routes.LOGIN}>
          <LoginPage />
        </GuestRoute>

        <GuestRoute path={Routes.SIGNUP}>
          <SignupPage />
        </GuestRoute>

        <PrivateRoute path="/">
          <Redirect to={`${Routes.MESSAGES}`} />
        </PrivateRoute>
      </Switch>
    </Box>
  );
};

export default App;
