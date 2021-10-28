import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LabeledInput from "./LabeledInput";
import { LabelBox } from "./styled";
import LabeledSelect from "./LabeledSelect";
import React from "react";
import {
  useFormik,
  Form,
  // Formik, Form
} from "formik";
import { initialValues } from "./validations";
const theme = createTheme();

export default function SignUp() {
  // const onSubmit = (val) => console.log(val);
  // const onReset = () => console.log("reset");
  const formik = useFormik({
    initialValues,
    // onSubmit,
    // onReset,
    // DisplayingErrorMessagesSchema
  });

  console.log("values = ", formik.values);
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
          {/* <Formik */}
          {/* initialValues={initialValues}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={(values) => {
              // same shape as initial value
              console.log(values);
            }} */}
          <Form onSubmit={formik.handleSubmit}>
            {/* {(errors, touched) => ( */}
            <>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="firstName"
                  placeholder="first name"
                  labelName="First Name"
                  inputType="text"
                  // handleChange={formik.handleChange}
                  // value={formik.values.firstName}
                  // {...formik.getFieldProps("firstName")}
                />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="surName"
                  placeholder="surname"
                  labelName="Surname"
                  inputType="text"
                  // handleChange={formik.handleChange}
                  // value={formik.values.surName}
                />
              </LabelBox>
              <LabelBox>
                <LabeledSelect
                  labelName="Select Country"
                  id="country"
                  req={true}
                  // handleChange={formik.handleChange}
                  // value={formik.values.country}
                />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="mobileNumber"
                  placeholder="mobile number"
                  labelName="Mobile Number"
                  inputType="text"
                  // handleChange={formik.handleChange}
                  // value={formik.values.mobileNumber}
                />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="email"
                  placeholder="Email"
                  labelName="Email Addresss"
                  inputType="email"
                  // handleChange={formik.handleChange}
                  // value={formik.values.email}
                />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="password"
                  placeholder="Password"
                  labelName="Password"
                  inputType="password"
                  // handleChange={formik.handleChange}
                  // value={formik.values.password}
                />
              </LabelBox>
              <LabelBox>
                <LabeledInput
                  type="input"
                  req={true}
                  id="retypePassword"
                  placeholder="Retype password"
                  labelName="Retype password"
                  inputType="password"
                  // handleChange={formik.handleChange}
                  // value={formik.values.retypePassword}
                />
              </LabelBox>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign up
              </Button>
            </>
            {/* )} */}
          </Form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
