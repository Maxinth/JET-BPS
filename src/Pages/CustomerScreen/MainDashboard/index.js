import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.css";
import SidebarComponent from "../SidebarComponent";
import Dashboard from "../Dashboard";
import PageNotFound from "../../PageNotFound";
import {MenuSharp } from "@mui/icons-material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Drawer, Box, Snackbar, Alert } from "@mui/material";
import ListSidebarComponent from "../ListSidebarComponent";
import { useSelector, shallowEqual } from "react-redux";
import Subsidy from "../Subsidy";
import Wallet from "../Wallet";
import Spinner from "../../../components/Spinner";
import Voucher from "../Voucher";
import { useDispatch } from "react-redux";
import { setwelcome,setDrawer} from "../../../slices/allState";
import AccountMenu from "../Menu";


const MainDashboard = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { loading,iswelcome,openDrawer } = useSelector((state) => state.other, shallowEqual);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  

 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setwelcome(false)) 
  };

  return (
    <>
      {loading?<Spinner title={"Signing out ..."} />
      :(
        <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={iswelcome}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "fit-content" }}
        >
          Welcome Back {user.firstName.toUpperCase()},
          {user.lastName.toUpperCase()}
        </Alert>
      </Snackbar>
      <Container fluid>
        <Row>
          <Col md={2} className={classes.Drawer}>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={()=>dispatch(setDrawer(false))}
            >
              <Box className={classes.appDraw}>
                <ListSidebarComponent />
              </Box>
            </Drawer>
          </Col>

          <SidebarComponent />
          <Col md={10} style={{ backgroundColor: "white" }}>
            <Row>
              <Col md={12} className={classes.head}>
                <div>
                  {" "}
                  <span
                    className={classes.tog_icon}
                    style={{ float: "left", display: "none" }}
                  >
                    <MenuSharp onClick={()=>dispatch(setDrawer(true))} />
                  </span>


                  <AccountMenu user={user}/>
                  
                  
        
                </div>
              </Col>
              <Switch>
                <Route exact path={`${path}/`} component={Dashboard} />
                <Route exact path={`${path}/subsidy`} component={Subsidy} />
                <Route exact path={`${path}/wallet`} component={Wallet} />
                <Route exact path={`${path}/voucher`} component={Voucher} />
                <Route path={`${path}/*`}>
                  <PageNotFound />
                </Route>
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
      </>
      )}
    </>
  );
};

export default MainDashboard;
