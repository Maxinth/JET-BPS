import React from "react";
import { Container,Row,} from "react-bootstrap";
import {Switch ,Redirect, Route} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Login from "./components/AuthPage/Login"
import ForgotPassword from "./components/AuthPage/ForgotPassword"
import DashBoard from "./components/MainDashboard";
import Funds from "./components/Funds";
import PrintPage from "./components/PrintPage";
import PrintPageSecond from "./components/PrintPageSecond";


function App() {
  const routes=(
<Switch>
<Route exact  path={`/login`} component={Login}/>
<Route exact path={`/forgot`} component={ForgotPassword}/>
<Route path="/home"  component={DashBoard}/>
<Route path="/funds"  component={Funds}/>
<Route path="/print"  component={PrintPage}/>
<Route path="/print2"  component={PrintPageSecond}/>
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
