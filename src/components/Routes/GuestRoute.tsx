import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from 'store/auth/authSelectors';
import { Routes } from "constants/routes";

export const GuestRoute: React.FC<RouteProps> = ({ children, ...routeProps }) => {
  const loggedIn = !!useSelector(getToken);

  return (
    <Route {...routeProps}>
      {loggedIn
        ?
        <Redirect to={Routes.MESSAGES} />
        :
        children
      }
    </Route>
  );
};
