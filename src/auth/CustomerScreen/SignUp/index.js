import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import LabeledInput from "../../../Pages/RPAScreen/DepositPageComps/LabeledInput";
import { LabelBox } from "./styled";
import MobileLabelInput from "./MobileLabelInput";
const theme = createTheme();

const SignUp = () => {
  const [name, setName] = useState("");
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <LabelBox>
              <LabeledInput
                handleChange={setName}
                type="input"
                req={true}
                value={name}
                placeholder="FirstName Surname"
                labelName="Names"
                inputType="text"
              />
            </LabelBox>
            <LabelBox>
              <MobileLabelInput
                labelName="Mobile number"
                placeholder="select country"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={setName}
                type="input"
                req={true}
                value={name}
                placeholder="FirstName Surname"
                labelName="Names"
                inputType="text"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={setName}
                type="input"
                req={true}
                value={name}
                placeholder="Email"
                labelName="Email Addresss"
                inputType="email"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={setName}
                type="input"
                req={true}
                value={name}
                placeholder=""
                labelName="Password"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={setName}
                type="input"
                req={true}
                value={name}
                placeholder="FirstName Surname"
                labelName="Retype password"
              />
            </LabelBox>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <NavLink to={`/forgot`} style={{ marginLeft: "35%" }}>
              Sign up
            </NavLink>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
