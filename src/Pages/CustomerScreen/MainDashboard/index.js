import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./index.module.css";
import SidebarComponent from "../../../components/SidebarComponent";
import Dashboard from "../Dashboard";
import PageNotFound from "../../PageNotFound";
import { PersonSharp, MenuSharp } from "@mui/icons-material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Drawer, Box, Snackbar, Alert } from "@mui/material";
import ListSidebarComponent from "../../../components/ListSidebarComponent";
import { useSelector, shallowEqual } from "react-redux";

const MainDashboard = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
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
              <Col md={12} style={{ padding: "15px" }}>
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
                <Route path={`${path}/*`}>
                  <PageNotFound />
                </Route>
              </Switch>
              {/*  */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainDashboard;
