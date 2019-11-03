import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default NavigationBar;
