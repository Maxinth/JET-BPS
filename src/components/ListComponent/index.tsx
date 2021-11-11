import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListComponent = ({ ...props }) => {



  return (
    <>
      <ListItem
      >
        <Link to={props.path}>
          <ListItemButton
          >
            <ListItemIcon>{props.Icon}</ListItemIcon>
            <ListItemText primary={props.title} />
          </ListItemButton>
        </Link>
      </ListItem>
    </>
  );
};

export default ListComponent;
