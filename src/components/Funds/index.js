import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import {ArrowForwardIos} from '@mui/icons-material';
import {Typography,Breadcrumbs,Link,FormControl,
  InputLabel,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,}from '@mui/material';
import CardComponent from '../CardComponent';
import classes from "./index.module.scss"

const Funds=(props)=>{


  
  

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/home" >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/home/wallet"
    >
      Wallet
    </Link>,
    <Typography key="3" color="text.primary">
      Funds Transfer
    </Typography>,
  ];

  
  
  return(


<Container fluid>
<Row>
<Col md={2}></Col>
<Col md={8} className={classes.Section}>
<Row>
<Col md={12}>
<Breadcrumbs
        separator={<ArrowForwardIos
          fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
</Col>
</Row>
<Row style={{ marginTop:'40px' }}>
<Col></Col>
<Col>
 <CardComponent Title={'Wallet Balance'} subTitle={"$800,0000"}/>
</Col>
<Col></Col>
</Row>

<Row>
  <Row>
    <Col md={3}></Col>
<Col md={6} style={{ marginTop:'20px' }}>
  <Stack spacing={3}>
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Select Bank Name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value=""
          label="Bank Name"
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
      <TextField
          required
          value=""
          
          id="outlined-error"
          label="Account Number"
          
        />
      </FormControl>
      <FormControl fullWidth>
      <TextField
          required
          id="outlined-error"
          value=""
          label="Account Name"
        />
      </FormControl>
      <FormControl fullWidth>
      <TextField
      type="number"
          required
          value=""
          id="outlined-error"
          label="Amount To Transfer"
          helperText="Please enter amount to Transfer"
        />
      </FormControl>
      </Stack>
    
</Col>
<Col md={12} style={{padding:'20px'}}>
<Button variant="outlined" color="error">Cancel</Button>
<Button variant="contained" color="primary" sx={{float :'right' }}>Confirm</Button>
</Col>
<Col md={3}></Col>
</Row>
</Row>
</Col>
<Col md={2}></Col>



</Row>

</Container>
  )
}

export default Funds