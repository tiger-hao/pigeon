import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
