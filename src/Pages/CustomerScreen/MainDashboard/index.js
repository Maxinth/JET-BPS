import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.css";
import SidebarComponent from "../SidebarComponent";
import Dashboard from "../Dashboard";
import PageNotFound from "../../PageNotFound";
import { PersonSharp, MenuSharp } from "@mui/icons-material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Drawer, Box, Snackbar, Alert } from "@mui/material";
import ListSidebarComponent from "../ListSidebarComponent";
import { useSelector, shallowEqual } from "react-redux";
import Subsidy from "../Subsidy";
import Wallet from "../Wallet";
import Spinner from "../../../components/Spinner";
import Voucher from "../Voucher";

const MainDashboard = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { loading } = useSelector((state) => state.other, shallowEqual);
  const { path } = useRouteMatch();
  const [state, setState] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {loading?<Spinner title={"Signing out ..."} />
      :(
        <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
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
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
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
                    <MenuSharp onClick={toggleDrawer("left", true)} />
                  </span>
                  <h6
                    style={{
                      float: "right",
                      margin: "15px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    {user.firstName.toUpperCase()},{user.lastName.toUpperCase()}{" "}
                    <PersonSharp />
                  </h6>
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
