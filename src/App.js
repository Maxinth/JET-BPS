import React from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./auth/RPAScreen/Login";
import ForgotPassword from "./auth/RPAScreen/ForgotPassword";
import DashBoard from "./Pages/RPAScreen/MainDashboard";
import CusDashBoard from "./Pages/CustomerScreen/MainDashboard";
import Funds from "./Pages/RPAScreen/Funds";
import PrintPage from "./Pages/CustomerScreen/PrintPage";
import PrintPageSecond from "./Pages/RPAScreen/PrintPageSecond";
import CusLogin from "./auth/CustomerScreen/Login";
import CusForgotPass from "./auth/CustomerScreen/ForgotPassword";
import SignUp from "./auth/CustomerScreen/SignUp";
import ProtectedRoute from "./shared/ProtectedRoute";
import PrivateRoute from "./shared/PrivateRoute";

function App() {
  const routes = (
    <Switch>
      <Route path="/cs/signup" component={SignUp} />
      <ProtectedRoute exact path="/customer" component={CusDashBoard} />
      <PrivateRoute exact path={`/customer/forgot`} component={CusForgotPass} />
      <PrivateRoute exact path={`/customer/login`} component={CusLogin} />
      <Route exact path={`/customer/signup`} component={Login} />
      <PrivateRoute exact path={`/login`} component={Login} />
      <PrivateRoute exact path={`/forgot`} component={ForgotPassword} />
      <ProtectedRoute path="/home" component={DashBoard} />
      <Route exact path="/funds" component={Funds} />
      <ProtectedRoute exact path="/trans/:id" component={PrintPage} />
      <Route exact path="/print2" component={PrintPageSecond} />
      <Route exact path="/">
        <Redirect to={`/home`} />
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
