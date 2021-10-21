import React, {useState} from "react";
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

import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useDispatch } from "react-redux";



const CusForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    email: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: values.email,
      
    };
    
  };
const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
                  <Help />
                </Avatar>
                <Typography component="h2" variant="h5" color=" #9c27b0">
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
                      sx={{ color: " #9c27b0" }}
                    >
                      Enter Email
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
                    Get new Password
                  </Button>
                  </Box>
                  </Box>
                  </Col>
                   
            <Col md={4}></Col>
          </Row>
        </Container>
                  )
                  }
                  
    </>
  )
};
export default CusForgotPassword;
