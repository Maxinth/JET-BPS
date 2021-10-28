import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  
  FormControl,
  TextField,
  Button,
  Stack,
  Paper
} from "@mui/material";
import classes from "./index.module.css";
import { Prompt } from 'react-router'
import { useHistory } from "react-router";

const Voucher= () => {
  
  let history=useHistory()
  const formIsHalfFilledOut=()=>{

    alert('hey!! leaving?')
  }
  

  return (
   <>
   <Prompt
    when={formIsHalfFilledOut}
    message="Are you sure you want to leave?"
  />
   <Row>
<Col md={3}></Col>
<Col md={6} style={{ position:'relative', height:'300px' }}>
  <Paper elevation={4} sx={{ marginTop:'20px' }}>
<Stack>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    
                      label="Voucher Number"
                      variant="filled"
                    />
                  </FormControl>
              </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                      type="number"
                      label="Voucher Pin"
                      variant="filled"
                      
                    />
                  </FormControl>
              </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    type="number"
                      label="Credit Amount ( Optional)"
                      variant="filled"                      
                    />
                  </FormControl>
              </Col>
</Stack>
</Paper>

<Col md={12} className={classes.footer} >
                <Button variant="outlined" color="error" onClick={()=>history.goBack()}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ float: "right" }}
                >
                  Confirm
                </Button>
              </Col>
</Col>
<Col md={3}></Col>

   </Row>
   </>
  )
}

export default Voucher;
