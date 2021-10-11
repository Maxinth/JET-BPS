import {TextField} from "@mui/material";

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
