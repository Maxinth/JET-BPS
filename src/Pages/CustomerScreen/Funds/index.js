import React,{useState} from "react";
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
  MenuItem
} from "@mui/material";
import classes from "./index.module.css";
import Bank from "../components/Bank";
import Card from "../components/Card";
import Voucher from "../components/Voucher";



const Funds = () => {
  const [value, setValue] = useState("");

 const handleChange=(e)=>{
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
    <Container fluid>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className={classes.Section}>
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
                      onChange={(e)=>handleChange(e.target.value)}
                      
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


{ value ==="card"?<Card/> :null}
{ value ==="bank"?<Bank/> :null}
{ value ==="voucher"?<Voucher/> :null}

              </Col>
          </Row>
        </Col>


        
        <Col md={2}></Col>
      </Row>
    </Container>
  )
}

export default Funds;
