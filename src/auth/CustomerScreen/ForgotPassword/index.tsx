import React, { useState } from "react";
import Help from "@mui/icons-material/Help";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Box,
  FilledInput,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from 'framer-motion'
import classes from './index.module.scss'
import { Container, Row, Col } from "react-bootstrap";
// import { NavLink, useHistory } from "react-router-dom";
import Spinner from "../../../components/Spinner";
// import { useDispatch } from "react-redux";

const CusForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // const dispatch = useDispatch();
  // const history = useHistory();
  const [values, setValues] = useState({
    email: "",
  });
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();


    setLoading(true);
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
          Invalid Input entered
        </Alert>
      </Snackbar>
      {loading ? (
        <Spinner title={"Wait a moment"} />
      ) : (
        <Container className={classes.Container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
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
                      <Help />
                    </Avatar>
                    <Typography component="h2" variant="h5" color="#1F3F49">
                      Get New Password
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

                        >
                          Enter Email
                        </InputLabel>
                        <FilledInput
                          name="email"
                          id="outlined-adornment-email"
                          type="text"
                          onChange={handleChange("email")}

                          value={values.email}
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
                        Get new Password
                      </Button>
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
export default CusForgotPassword;
