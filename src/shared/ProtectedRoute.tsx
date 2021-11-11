import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends Omit<RouteProps, 'component'> {
  component: React.ElementType
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const us = JSON.parse(sessionStorage.getItem("xys")!);
  const isLoggedIn = us ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: "/customer/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
