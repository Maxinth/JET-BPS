import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Typography,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,

  Stack,
  Select,
  MenuItem,
  Paper
} from "@mui/material";
import classes from "./index.module.scss";
import Bank from "../components/Bank";
import Card from "../components/Card";
import Voucher from "../components/Voucher";
import { motion } from "framer-motion";



const Funds = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: string) => {
    setValue(e)
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/customer">
      Dashboard
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/customer/wallet">
      Wallet
    </Link>,
    <Typography key="3" color="text.primary">
      Fund Wallet
    </Typography>,
  ];

  return (
    <Container fluid style={{ backgroundColor: '#2f5561', height: '100vh' }} >
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}

      >
        <Row>
          <Col md={2}></Col>
          <Col md={8} >
            <Paper elevation={4} className={classes.Section}>
              <Row>
                <Col md={12}>
                  <Breadcrumbs
                    separator={<ArrowForwardIos fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </Col>
              </Row>

              <Row>
                <Col md={3}></Col>
                <Col md={6} className={classes.body}>
                  <Stack spacing={3}>
                    <FormControl fullWidth required variant="filled">
                      <InputLabel>
                        Select Funding Source
                      </InputLabel>
                      <Select
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}

                      >
                        <MenuItem value="">
                          <em>Select Method</em>
                        </MenuItem>
                        <MenuItem value="bank">Bank</MenuItem>
                        <MenuItem value="card">Card</MenuItem>
                        <MenuItem value="voucher">Voucher</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Col>
                <Col md={3}></Col>
              </Row>
              <Row>
                <Col md={12}>


                  {value === "card" ? <Card /> : null}
                  {value === "bank" ? <Bank /> : null}
                  {value === "voucher" ? <Voucher /> : null}

                </Col>
              </Row>
            </Paper>
          </Col>



          <Col md={2}></Col>
        </Row>
      </motion.div>
    </Container>
  )
}

export default Funds;
