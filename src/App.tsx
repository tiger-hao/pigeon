import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
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
  const user = useSelector((state: IRootState) => state.user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Pigeon</b>
      </header>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path={Routes.HOME} exact>
            <div>
              {JSON.stringify(user)}
            </div>
          </Route>
          <Route path={Routes.LOGIN}>
            <LoginPage />
          </Route>
          <Route path={Routes.SIGNUP}>
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
