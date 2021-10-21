import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const us = JSON.parse(sessionStorage.getItem("xys"));
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
