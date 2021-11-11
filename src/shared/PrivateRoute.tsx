import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends Omit<RouteProps, 'component'> {
  component: React.ElementType
}
const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const us = JSON.parse(sessionStorage.getItem("xys")!);
  const isLoggedIn = us ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Redirect to={{ pathname: "/customer" }} />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
