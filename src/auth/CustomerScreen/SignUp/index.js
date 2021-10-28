import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LabeledInput from "./LabeledInput";
import { LabelBox } from "./styled";
import LabeledSelect from "./LabeledSelect";
import { initState as initialValues } from "./data";
import { validationSchema } from "./validations";
import { Form, Formik, ErrorMessage } from "formik";
import React from "react";

const theme = createTheme();

export default function SignUp() {
  const onSubmit = (val) => console.log(val);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "2px 0px 10px rgb(0,0,0,0.4)",
            padding: "35px",
            maxWidth: "700px",
            margin: "5rem auto",
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
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
