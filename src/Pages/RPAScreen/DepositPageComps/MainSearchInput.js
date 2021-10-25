import React from "react";
import {TextField} from "@mui/material";
import React from 'react'
const MainSearchInput = () => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      required
      placeholder="Search with Reference number"
      className="mainSearch"
    />
  );
};

export default MainSearchInput;
