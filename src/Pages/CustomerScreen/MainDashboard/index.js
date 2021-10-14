import React from 'react'
import{Container,Row,Col} from 'react-bootstrap'
import classes from "./index.module.css"
import SidebarComponent from '../../../components/SidebarComponent';
import Dashboard from '../Dashboard'
import PageNotFound from "../../PageNotFound"
import {
  PersonSharp,
  MenuSharp
} from '@mui/icons-material';
import {Route,Switch,useRouteMatch} from 'react-router-dom'
import { Drawer,Box} from '@mui/material';
import ListSidebarComponent from '../../../components/ListSidebarComponent'




const MainDashboard=()=>{
const {path}=useRouteMatch()
const [state, setState] = React.useState({});

  const toggleDrawer = (anchor,open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return(
    <>
<Container fluid >
<Row>
 <Col md={2} className={classes.Drawer}>
<Drawer anchor="left" open={state['left']} onClose={toggleDrawer("left",false)}>
<Box className={classes.appDraw}>
<ListSidebarComponent/>
</Box>
      </Drawer>
      </Col>
      
  <SidebarComponent/>
<Col md={10} style={{ backgroundColor:"white" }}>
  <Row>
<Col md ={12} style={{padding:"15px",}}>
  <span className={classes.tog_icon} style={{float:'left',display:'none'}}>
    <MenuSharp  onClick={toggleDrawer("left",true)}/></span>
  <h6 style={{ float:"right", margin:'15px' }}>SeedCo,Taris Robert {" "} <PersonSharp/></h6>
  </Col>
<Switch>
<Route exact path={`${path}/`} component={Dashboard} />

<Route path={`${path}/*`}>  
<PageNotFound/>
</Route>
</Switch>
  {/*  */}
  </Row>
  </Col>
  </Row>
</Container>
    </>
  )
}

export default MainDashboard