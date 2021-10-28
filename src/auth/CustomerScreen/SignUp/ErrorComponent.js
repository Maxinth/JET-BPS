import React from "react";
import { ErrorBox } from "./styled";

const ErrorComponent = ({ isVisited, error }) => {
  return <>{isVisited && error && <ErrorBox>{error}</ErrorBox>}</>;
};

export default ErrorComponent;
