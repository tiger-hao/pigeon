import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth/authActions';

export const NavigationBar: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <button onClick={onClick}>Log out</button>
    </div>
  );
};
