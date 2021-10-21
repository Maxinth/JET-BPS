import React, { useState } from "react";

import {
  Stack,
  IconButton,
  Avatar,
  Button,
  Box,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useDispatch } from "react-redux";
import { signin } from "../../../slices/auth";
//import bcrypt from "bcryptjs";

//const salt = bcrypt.genSaltSync(10);

const CusLogin = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
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
                  autoComplete="off"
                  noValidate
                  sx={{ mt: 5 }}
                >
                  <FormControl sx={{ mt: 2, width: "100%" }}>
                    <InputLabel
                      htmlFor="outlined-adornment-email"
                      sx={{ color: " #9c27b0" }}
                    >
                      Username
                    </InputLabel>
                    <FilledInput
                      name="email"
                      id="outlined-adornment-email"
                      type="text"
                      onChange={handleChange("email")}
                      label="Username"
                      value={values.email}
                    />
                  </FormControl>
                  <FormControl sx={{ mt: 3, width: "100%" }}>
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      sx={{ color: " #9c27b0" }}
                    >
                      Password
                    </InputLabel>
                    <FilledInput
                      id="outlined-adornment-password"
                      name="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
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
                  <Stack direction="row" spacing={2}>
                    <NavLink to={`/cs/signup`} style={{ marginLeft: "5%" }}>
                      Not Logged in? Signup
                    </NavLink>
                    <NavLink to={`/customer/forgot`} style={{ marginLeft: "5%" }}>
                      Forgot password?
                    </NavLink>
                  </Stack>
                </Box>
              </Box>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default CusLogin;
