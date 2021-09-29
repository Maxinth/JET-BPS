import React from "react";
import { Container,Row,} from "react-bootstrap";
import {Switch , Route} from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import PageIndex from './components/PageIndex'

function App() {
  const routes=(
<Switch>
<Route path="/index">
<PageIndex/>
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
