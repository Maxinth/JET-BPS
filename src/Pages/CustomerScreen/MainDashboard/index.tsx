import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.scss";
import SidebarComponent from "../SidebarComponent";
import Dashboard from "../Dashboard";
import { MenuSharp } from "@mui/icons-material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Drawer, Box, Snackbar, Alert } from "@mui/material";
import ListSidebarComponent from "../ListSidebarComponent";
import Subsidy from "../Subsidy";
import Wallet from "../Wallet";
import Spinner from "../../../components/Spinner"
import Voucher from "../Voucher";
import { setwelcome, setDrawer } from "../../../slices/allState";
import AccountMenu from "../Menu";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Typography from '@mui/material/Typography';


const MainDashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { loading, iswelcome, openDrawer } = useAppSelector((state) => state.other);
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();



  const handleClose = () => {
    dispatch(setwelcome(false))
  };

  return (
    <>
      {loading ? <Spinner title={"Signing out ..."} />
        : (
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
                Welcome Back {user!.firstName},
                {user!.lastName}
              </Alert>
            </Snackbar>
            <Container fluid>
              <Row>

                <Drawer
                  anchor="left"
                  open={openDrawer}
                  onClose={() => dispatch(setDrawer(false))}
                >
                  <Box className={classes.appDraw}>
                    <ListSidebarComponent />
                  </Box>
                </Drawer>
                <SidebarComponent />
                <Col md={10} className={classes.content}>
                  <Row>
                    <Col md={12} className={classes.head}>

                      <Typography
                        className={classes.tog_icon}
                      >

                        <MenuSharp onClick={() => dispatch(setDrawer(true))} />
                      </Typography>


                      <AccountMenu user={user} />



                    </Col>
                    <Col md={12}>
                      <Switch>
                        <Route exact path={`${path}/`} component={Dashboard} />
                        <Route exact path={`${path}/subsidy`} component={Subsidy} />
                        <Route exact path={`${path}/wallet`} component={Wallet} />
                        <Route exact path={`${path}/voucher`} component={Voucher} />
                      </Switch>
                    </Col>
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
