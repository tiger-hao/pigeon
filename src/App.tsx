import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Routes from "constants/routes";
import NavigationBar from "components/NavigationBar";
import SignupPage from "pages/signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>Pigeon</b>
      </header>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path={Routes.SIGNUP}>
            <SignupPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;