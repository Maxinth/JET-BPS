import React from 'react'
import {Card,Col,Row} from 'react-bootstrap'
import classes from './index.module.css'

const CardComponent=()=>{


  return(
<>
<Row style={{ padding:'20px' }}>
<Col>
<Card className={classes.card}>
  <Card.Body>
    <h5>Total Funds Received</h5>
    <br/>
    <h5>$150,000,000</h5>
  </Card.Body>
</Card></Col>
<Col>
<Card className={classes.card}>
  <Card.Body>
    <h5>Total Disbursement</h5>
    <br/>
    <h5>$70,000,000</h5>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className={classes.card}>
  <Card.Body>
    <h5>Wallet Balance</h5>
    <br/>
    <h5>$80,000,000</h5>
  </Card.Body>
</Card>
</Col>
</Row>
</>
  )
}

export default CardComponent