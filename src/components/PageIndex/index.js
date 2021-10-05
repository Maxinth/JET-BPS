import React from "react";
import { Col,Row } from "react-bootstrap";
import {Switch , Route} from "react-router-dom"
import Login from "../AuthPage/Login"
import ForgotPassword from "../AuthPage/ForgotPassword"
import DashBoard from "../MainDashboard";
import PageNotFound from "../PageNotFound"
import ProtectedRoute from "../../shared/ProtectedRoute"
import {useRouteMatch} from 'react-router-dom'


function PageIndex() {
  
  
  const {path}=useRouteMatch()



  const routes=(
<Switch>

<Route exact  path={`${path}/`} component={Login}/>
<Route exact path={`${path}/forgot`} component={ForgotPassword}/>
<Route   path={`${path}/dashboard`} component={DashBoard}/>
{/* <ProtectedRoute exact path={`${path}/dashboard`}> 
<DashBoard />
</ProtectedRoute> */}
 <ProtectedRoute exact path={`${path}/*`}> 
<PageNotFound/>
</ProtectedRoute>
</Switch>
  )
  
  return (
<Col md={12}>
      <Row >
                {routes}
      </Row>
</Col>
       
    
  );
}

export default PageIndex;
