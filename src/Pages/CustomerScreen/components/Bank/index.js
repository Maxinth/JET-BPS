import React from "react";
import { 
  
   Row, Col } from "react-bootstrap";
   import { Prompt } from 'react-router'
import { useHistory } from "react-router";
import {
  FormControl,
  InputLabel,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  Paper
} from "@mui/material";
import classes from "./index.module.css";


const Bank = () => {
  

  let history=useHistory()
  const formIsHalfFilledOut=()=>{

    alert('hey dont leave')
  }
  


  return (
    <>
    <Prompt
    when={formIsHalfFilledOut}
    message="Are you sure you want to leave?"
  />
    <Row>
<Col md={3}></Col>
<Col md={6} style={{ position:'relative', height:'350px' }}>
  <Paper elevation={4} sx={{ marginTop:'20px' }}>
<Stack>
<Col md={12}>
                
                <FormControl variant="filled" fullWidth required>
                  <InputLabel id="demo-simple-select-helper-label">
                   Select Bank
                  </InputLabel>
                  <Select
                  
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value=""
                    label="Select Bank"
                                     
                  >
                    <MenuItem value={null}>None</MenuItem>
                    
   <MenuItem value="uba" >UBA</MenuItem>
   <MenuItem value="fb" >First Bank</MenuItem>
   <MenuItem value="gt" >GT Bank</MenuItem>

                  
              
                  </Select>
                </FormControl>
            </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    required
                    type="number"
                      label="Account Number"
                      variant="filled"
                    />
                  </FormControl>
              </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                      label="Account Name"
                      variant="filled"
                      
                    />
                  </FormControl>
              </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    required
                    type="number"
                      label="Credit Amount"
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

export default Bank;
