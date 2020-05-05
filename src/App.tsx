import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { IRootState } from 'store/rootReducer';
import { Routes } from 'constants/routes';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { SignupPage } from 'pages/SignupPage';
import { LoginPage } from 'pages/LoginPage';

const App: React.FC = () => {
  const authState = useSelector((state: IRootState) => state.auth);
  const loggedIn = true;

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
              {JSON.stringify(authState)}
            </div>
            :
            <Redirect to={Routes.LOGIN} />
          }

        </Route>
        <Route path={Routes.LOGIN}>
          <LoginPage />
        </Route>
        <Route path={Routes.SIGNUP}>
          <SignupPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
