import React from "react";
import {
  List,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard,
  MonetizationOn,
  Send,
  AccountBalanceWallet,
  Help,
  Logout,
} from "@mui/icons-material";
import classes from "./index.module.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import ListComponent from "../../../components/ListComponent";
import { signout} from "../../../slices/auth";
import { isloading,setDrawer } from "../../../slices/allState";
import { useDispatch } from "react-redux";

const ListSidebarComponent = () => {
  const { path } = useRouteMatch();
  let dispatch = useDispatch();
  let history = useHistory();

  const logOut = () => {
    dispatch(isloading(true))
    setTimeout(()=>{
      dispatch(signout())
      .unwrap()
      .then(() => {
        dispatch(isloading(false))
        history.push("/customer/login");
      });
    history.push("/customer/login");
    },3000)
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", position: "relative" }}
      
      onClick={()=>dispatch(setDrawer(false))}>
        <div className={classes.Header}>
          <span>BPS</span>
        </div>

        <List>
          <ListComponent
            path={`${path}/`}
            Icon={<Dashboard sx={{ color: "white" }} />}
            event="dashboard"
            title={"Dashboard"}
          />

          <ListComponent
            path={`${path}/subsidy`}
            Icon={<Send sx={{ color: "white" }} />}
            event="subsidy"
            title="Subsidy"
          />
          <ListComponent
            path={`${path}/wallet`}
            Icon={<AccountBalanceWallet sx={{ color: "white" }} />}
            event="wallet"
            title="Wallet"
          />
          <ListComponent
            path={`${path}/voucher`}
            Icon={<MonetizationOn sx={{ color: "white" }} />}
            event="voucher"
            title="Buy Voucher"
          />
        </List>

        <List style={{ marginTop: "21vh" }}>
          <ListComponent
            path={`${path}/help`}
            Icon={<Help sx={{ color: "white" }} />}
            event="help"
            title="About"
          />
        </List>

        <List
          sx={{
            width: "100%",
            position: "absolute",
            bottom: "0px",
            backgroundColor: "white",
            color: "red",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={logOut}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout
                  sx={{
                    color: "red",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default ListSidebarComponent;
