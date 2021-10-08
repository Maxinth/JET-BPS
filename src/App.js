import React from "react";
import { Container,Row,} from "react-bootstrap";
import {Switch ,Redirect, Route} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Login from "./components/AuthPage/Login"
import ForgotPassword from "./components/AuthPage/ForgotPassword"
import DashBoard from "./components/MainDashboard";

function App() {
  const routes=(
<Switch>
<Route exact  path={`/login`} component={Login}/>
<Route exact path={`/forgot`} component={ForgotPassword}/>
<Route path="/home"  component={DashBoard}/>
<Route path="/"  >
<Redirect to={`/home`}/>
</Route>
<Route path="*">  
<PageNotFound/>
</Route>
</Switch>
  )
  return (
    <Container fluid>
      
      <Row >
        {routes}
      </Row>
      
    </Container>
  );
}


export default App;
