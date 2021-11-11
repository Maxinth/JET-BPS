import React from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import PageNotFound from "./Pages/MDAScreen/PageNotFound";
import DashBoard from "./Pages/CustomerScreen/MainDashboard";
import Login from "./auth/CustomerScreen/Login";
import ForgotPassword from "./auth/CustomerScreen/ForgotPassword";
import Application from "./Pages/CustomerScreen/Application";
import Funds from "./Pages/CustomerScreen/Funds";
import SignUp from "./auth/CustomerScreen/SignUp";
import ProtectedRoute from "./shared/ProtectedRoute";
import PrivateRoute from "./shared/PrivateRoute";
import BuyVoucher from "./Pages/CustomerScreen/BuyVoucher";

const App: React.FC = () => {
  const routes = (
    <Switch>
      <PrivateRoute exact path="/customer/signup" component={SignUp} />
      <PrivateRoute exact path="/customer/login" component={Login} />
      <PrivateRoute exact path="/customer/forgot" component={ForgotPassword} />
      <ProtectedRoute exact path="/application" component={Application} />
      <ProtectedRoute exact path="/fund" component={Funds} />
      <ProtectedRoute exact path="/buy" component={BuyVoucher} />
      <ProtectedRoute path="/customer" component={DashBoard} />
      <Route exact path="/">
        <Redirect to={`/customer`} />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );

  return (
    <Container fluid>
      <Row>{routes}</Row>
    </Container>
  );
}

export default App;
