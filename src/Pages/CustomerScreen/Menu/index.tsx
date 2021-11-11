import React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { PersonSharp } from "@mui/icons-material";
import { signout } from "../../../slices/auth";
import { isloading } from "../../../slices/allState";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from '../../../store/store';

const AccountMenu = ({ user }: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let dispatch = useAppDispatch();
  let history = useHistory();

  const logOut = () => {
    dispatch(isloading(true))
    setTimeout(() => {
      sessionStorage.removeItem("xs");
      sessionStorage.removeItem("xys")
      history.push("/customer/login");
      dispatch(signout(null))
      dispatch(isloading(false))
    }, 3000)

  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <Box sx={{ float: 'right' }}>
        <Tooltip title="Account settings">
          <Typography onClick={handleClick} sx={{
            fontSize: '11pt', padding: '10px',

            '&:hover': {
              cursor: 'pointer'
            }

          }}>
            {user.firstName.toLowerCase()},{user.lastName.toLowerCase()}
            <PersonSharp />

          </Typography>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
            padding: 1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default AccountMenu