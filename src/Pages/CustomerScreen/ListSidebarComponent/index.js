import React from "react";
import {
  List,
  Box,
} from "@mui/material";
import {
  Dashboard,
  MonetizationOn,
  Send,
  AccountBalanceWallet,
  Help,
} from "@mui/icons-material";
import classes from "./index.module.css";
import { useRouteMatch} from "react-router-dom";
import ListComponent from "../../../components/ListComponent";
import {setDrawer } from "../../../slices/allState";
import { useDispatch } from "react-redux";

const ListSidebarComponent = () => {
  const { path } = useRouteMatch();
  let dispatch = useDispatch();

  
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

        <List sx={{ position: "absolute",bottom:'0' ,
        width:'100%',
        boxShadow:' 0px 5px 7px rgba(0,0,0.4)'
      
      
      }}>
          <ListComponent
            path={`${path}/help`}
            Icon={<Help sx={{ color: "white" }} />}
            event="help"
            title="Support Center"
          />
        </List>
      </Box>
    </>
  )
}

export default ListSidebarComponent;
