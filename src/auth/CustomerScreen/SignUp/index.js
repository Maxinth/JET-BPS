import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Container,Col,Row} from "react-bootstrap";
import Button from "@mui/material/Button";

import LabeledInput from "./LabeledInput";
import { LabelBox } from "./styled";
import LabeledSelect from "./LabeledSelect";
import { initState as initialValues } from "./data";
import { validationSchema } from "./validations";
import { Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'



export default function SignUp() {
  const onSubmit = (val) => console.log(val);

  return (
    
      <Container fluid  style={{ backgroundColor: "#9c27b0", height: "fit-content",height:'100vh' }}>
        <motion.div  
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.3 }}
        >
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
          <motion.div
              initial={{ x:'150vh'}}
              animate={{ x: -10}}
              transition={{ delay:0.4, type:'spring',stiffness:110}}
              
              >
        <Box
          sx={{
          
            display: "flex",
            bgcolor: "#e8a8f3",
            color: " #9c27b0",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "2px 0px 10px rgb(0,0,0,0.4)",
            padding: "20px",
            maxWidth: "100%",
            margin: "2rem auto",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ marginBottom: 6 }}>
            Sign up
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="firstName"
                  placeholder="first name"
                  labelName="First Name"
                  inputType="text"
                />

                <ErrorMessage name="firstName" />
              </LabelBox>

              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="surName"
                  placeholder="surname"
                  labelName="Surname"
                  inputType="text"
                />

                <ErrorMessage name="surName" />
              </LabelBox>
              <LabelBox>
                <LabeledSelect
                  labelName="Select Country"
                  id="country"
                  req={true}
                />

                <ErrorMessage name="country" />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="mobileNumber"
                  placeholder="mobile number"
                  labelName="Mobile Number"
                  inputType="text"
                />

                <ErrorMessage name="mobileNumber" />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="email"
                  placeholder="Email"
                  labelName="Email Addresss"
                  inputType="email"
                />

                <ErrorMessage name="email" />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="password"
                  placeholder="Password"
                  labelName="Password"
                  inputType="password"
                />

                <ErrorMessage name="password" />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="retypePassword"
                  placeholder="Retype password"
                  labelName="Retype password"
                  inputType="password"
                />

                <ErrorMessage name="retypePassword" />
              </LabelBox>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 ,
                  bgcolor: "#9c27b0",
                  color: " white",
                  "&:hover": {
                    bgcolor: "#9c27b0",
                  },}}
              >
                Sign Up
              </Button>

              
            </Form>
          </Formik>
          <NavLink to={`/customer/login`} style={{ textAlign: "center" }}>
                     Already have an Account? Click here to Login
                    </NavLink>
        </Box>
        </motion.div>
</Col>
<Col md={3}></Col>
</Row>
</motion.div>
      </Container>
  
  );
}
