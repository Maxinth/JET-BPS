import React, { useState } from "react"

import {
  Stack,
  IconButton,
  Avatar,
  Button,
  Box,
  TextField,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion"

import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useDispatch } from "react-redux";
import { signin } from "../../../slices/auth";
import { setwelcome} from "../../../slices/allState";

//import bcrypt from "bcryptjs";

//const salt = bcrypt.genSaltSync(10);

const CusLogin = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [auto,setAuto]=useState(true)
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  //const password = bcrypt.hashSync(values.password, salt);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    dispatch(signin(user))
      .unwrap()
      .then(() => {
        history.push("/customer");
        setLoading(false);
        dispatch(setwelcome(true))
      })
      .catch((err) => {
        setLoading(false);
        setOpen(true);
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "fit-content" }}
        >
          Invalid Input entered
        </Alert>
      </Snackbar>
      {loading ? (
        <Spinner title={"Wait a moment"} />
      ) : (
        
        <Container style={{ backgroundColor: "#9c27b0", height: "100vh" }}>
          <motion.div  
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.3 }}
        >
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <motion.div
              initial={{ y:'150vh'}}
              animate={{ y: -10}}
              transition={{ delay:0.4, type:'spring',stiffness:110}}
              
              >
              <Box
                sx={{
                  marginTop: "30%",
                  flexDirection: "column",
                  bgcolor: "#e8a8f3",
                  color: " #9c27b0",
                  alignItems: "center",
                  boxShadow: "2px 0px 10px rgb(0,0,0,0.4)",
                  padding: "35px",
                  display: "flex",
                  flexWrap: "wrap",
                  borderRadius: "20px",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlined />
                </Avatar>
                <Typography component="h2" variant="h5" color=" #9c27b0">
                  Log-in
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ mt: 5 }}
                >
                
                  <FormControl fullWidth sx={{ mb:2 }}>
                    <TextField
                            type="text"
                            variant="filled"
                      onChange={handleChange("email")}
                      label="Username"
                      value={values.email}
                    />
                  </FormControl>
                  <FormControl fullWidth variant="filled">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      sx={{ color: " #9c27b0" }}
                    >
                      Password
                    </InputLabel>
                    <FilledInput
                    
                      readOnly={auto}
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      onFocus={()=>setAuto(false)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="show password"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                 
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "#9c27b0",
                      "&:hover": {
                        bgcolor: "#9c27b0",
                      },
                    }}
                  >
                    Login
                  </Button>
                  
                  <Stack direction="row" spacing={2} >
                    <NavLink to={`/customer/signup`} style={{ marginLeft: "1%" }}>
                      Not Logged in? Signup
                    </NavLink>
                    <NavLink to={`/customer/forgot`} style={{ float: "right" }}>
                      Forgot password?
                    </NavLink>
                  </Stack>
                </Box>
              </Box>
              </motion.div>
            </Col>
            <Col md={4}></Col>
          </Row>
          </motion.div>
        </Container>
        
      )}
    </>
  );
};
export default CusLogin;
