import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RootState } from 'store/rootReducer';
import { Routes } from 'constants/routes';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { AuthPage } from 'pages/AuthPage';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';

const App: React.FC = () => {
  const loggedIn = !!useSelector((state: RootState) => state.auth.token);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Pigeon</b>
      </header>
      <NavigationBar />
      <Switch>
        <Route exact path={Routes.HOME}>
          {loggedIn
            ?
            <div>
              {`Logged in: ${loggedIn}`}
            </div>
            :
            <Redirect to={Routes.LOGIN} />
          }

        </Route>
        <Route path={Routes.LOGIN}>
          <AuthPage header="Sign in">
            <LoginForm />
          </AuthPage>
        </Route>
        <Route path={Routes.SIGNUP}>
          <AuthPage header="Sign up">
            <SignupForm />
          </AuthPage>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
