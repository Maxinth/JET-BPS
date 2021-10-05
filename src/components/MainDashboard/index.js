import React, { useState } from 'react'
import{Container,Row,Col} from 'react-bootstrap'
import classes from "./index.module.css"
import SidebarComponent from '../SidebarComponent';
import Dashboard from '../Dashboard'
import Wallet from '../Pages/Wallet'
import Voucher from '../Pages/Voucher'
import Deposit from '../Pages/Deposit'
import AppDrawer from '../AppDrawer'
import {
  UserOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import {useLocation,Route,Switch,useRouteMatch} from 'react-router-dom'




const MainDashboard=()=>{

const {path}=useRouteMatch()
const {pathname}=useLocation()

const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  return(
    <>
<Container fluid>
<Row>
  { visible?
 (<Col md={2} className={classes.appDraw}> 
<AppDrawer onClose={onClose} visible={visible} />
</Col>):null
}
  <SidebarComponent/>
<Col md={10}>
  <Row>
<Col md ={12}>
  <span className={classes.tog_icon} style={{float:'left',display:'none'}}>
    
    <MenuUnfoldOutlined size="large" onClick={showDrawer}/></span>
  <h6 style={{ float:"right", margin:'15px' }}>SeedCo,Taris Robert {" "} <UserOutlined/></h6>
  </Col>
<Switch>
<Route exact path={`${path}/`} component={Dashboard} />
<Route exact path={`${path}/deposit`} component={Deposit} />
<Route exact path={`${path}/wallet`} component={Wallet} />
<Route exact path={`${path}/voucher`} component={Voucher} />
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