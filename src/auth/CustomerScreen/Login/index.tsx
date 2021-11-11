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
import classes from './index.module.scss'
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { signin } from "../../../slices/auth";
import { setwelcome } from "../../../slices/allState";
import { useAppDispatch } from "../../../store/store";
import { login } from "../../../services/auth_service";
//import bcrypt from "bcryptjs";

//const salt = bcrypt.genSaltSync(10);

const CusLogin = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [auto, setAuto] = useState(true)
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  //const password = bcrypt.hashSync(values.password, salt);
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);

    login(user.email, user.password).then((res) => {
      dispatch(signin(res))
      history.push("/customer");
      setLoading(false);
      dispatch(setwelcome(true))
    })
      .catch(() => {
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
  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {

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
          Invalid Input entered! Please try Again
        </Alert>
      </Snackbar>
      {loading ? (
        <Spinner title={"Wait a moment"} />
      ) : (

        <Container className={classes.Container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <motion.div
                  initial={{ y: '150vh' }}
                  animate={{ y: -10 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 110 }}
                >
                  <Box
                    className={classes.Box}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "#1F3F49" }}>
                      <LockOutlined />
                    </Avatar>
                    <Typography component="h2" variant="h5" color=" #1F3F49">
                      Log-in
                    </Typography>
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ mt: 5 }}
                    >

                      <FormControl fullWidth sx={{ mb: 2 }}>
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

                        >
                          Password
                        </InputLabel>
                        <FilledInput

                          readOnly={auto}
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}
                          onFocus={() => setAuto(false)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="show password"
                                onClick={handleClickShowPassword}
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

                        />
                      </FormControl>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          bgcolor: "#1F3F49",
                          "&:hover": {
                            bgcolor: "#1F3F49",
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
