import React from "react";
import { Container,Row,} from "react-bootstrap";
import {Switch ,Redirect, Route} from "react-router-dom"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./auth/RPAScreen/Login"
import ForgotPassword from "./auth/RPAScreen/ForgotPassword"
import DashBoard from "./Pages/RPAScreen/MainDashboard";
import Funds from "./Pages/RPAScreen/Funds";
import PrintPage from "./Pages/RPAScreen/PrintPage";
import PrintPageSecond from "./Pages/RPAScreen/PrintPageSecond";


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
