import React from 'react'
import {Card} from 'react-bootstrap'
import classes from './index.module.css'

const CardComponent=(props)=>{


  return(
<>
<Card className={classes.card}>
  <Card.Body>
    <h4 className="text-center">{props.Title}</h4>
    <br/>
    <h5 className="text-center">{props.subTitle}</h5>
  </Card.Body>
</Card>
</>
  )
}

export default CardComponent