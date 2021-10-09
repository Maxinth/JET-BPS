import React from 'react'
import classes from './index.module.css'
import {Container,Row,Col} from 'react-bootstrap'
import QRCode from 'react-qr-code'
import {Button} from '@mui/material'

const PrintPageSecond=()=>{




  return(
<Container fluid>
<Row>
<Col md={2}></Col>
<Col md={8} className={classes.Section}>
<Row>
<Col md={12}>
<div className="text-center">

  <h4>Basic Subsidy Scheme</h4>
  <h6>SeedCo Limited</h6>
  <h7>Payment details</h7>
</div>

</Col>
<Col md={12}>
<Row style={{marginTop:"50px"}}>
  <Col md={4} className="text-center" style={{ padding:"15px" }}>

<QRCode value={'hey'} size={100}/>
{" "}

<h6>Good Value Released</h6>
<h4>$10,000,000</h4>
<p>proccessed by</p>
<p> folayan@gmail.com</p>

  </Col>
  <Col md={8}>

    <table className={classes.table}>
      <tr>
        <td>Date</td>
        
        <td>1/3/2020</td>
      </tr>
      <tr>
        <td> Reference Number</td>
        
        <td>13GHTNU3839390</td>
      </tr>
      <tr>
        <td>Beneficiary Name</td>
        
        <td>formtable</td>
      </tr>
      <tr>
        <td>Beneficiary Wallet</td>
        
        <td>1333459390</td>

      </tr>
      <tr>
        <td>Beneficiary Deposit</td>
        
        <td>$8900000</td>
      </tr>
      <tr>
        <td>Good Value to Released</td>
        
        <td>$7000000</td>
      </tr>
    </table>
  </Col>

  <Col md={12}>
    <Button variant="outlined" sx={{ float:'right' }}>Print this page</Button>
  </Col>
</Row>

</Col>

  </Row>




</Col>
<Col md={2}></Col>
</Row>

</Container>
  )
}
export default PrintPageSecond