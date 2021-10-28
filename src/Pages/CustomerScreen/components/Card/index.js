import React from "react";
import {Row, Col,Alert } from "react-bootstrap";
import {
  FormControl,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { Prompt } from 'react-router'
import { useHistory } from "react-router";
import Cards from 'react-credit-cards';
import useForm from './useForm'
import classes from './index.module.css'



const Card = () => {
  var form=new FormData()
  let history=useHistory()
  const formIsHalfFilledOut=()=>{

    alert('hey!! leaving?')
  }
const {handleInputChange,handleInputFocus,handleSubmit,handleCallback,state,error}=useForm()
  return (
  <>
  <Prompt
    when={formIsHalfFilledOut}
    message="Are you sure you want to leave?"
  />
  <Row>
  <Col md={1}>
  
  </Col>
    <Col md={4} style={{marginBottom:"20px"}}>
    <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
          callback={handleCallback}
        />
    </Col>
<Col md={6}>
<div id="PaymentForm">
        <form ref={c => (form = c)} onSubmit={handleSubmit}>
          <Stack spacing={2}>
        <Stack>
              <FormControl fullWidth>
                    <TextField
                      variant="filled"
                    
                      type="tel"
                    
            name="number"
            pattern="[\d| ]{16,22}"
            required
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            error={error.number}
                    />
                  </FormControl>
              
      
              <FormControl fullWidth>
                    <TextField
                
                      variant="filled"
                      type="tel"
                      
            name="expiry"
            placeholder="Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            pattern="\d\d/\d\d"
                  required
            error={error.exp}
                    />
                  </FormControl>
          
              
              <FormControl fullWidth>
                    <TextField
                  
                      variant="filled"
                      type="tel"
                    
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            error={error.cvc}
            pattern="\d{3,4}"
                  required
                    />
                  </FormControl>
            
              
              <FormControl fullWidth>
                    <TextField
            required
                      variant="filled"
                      type="text"
            name="name"
            placeholder="Card Holder"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            error={error.name}
                    />
                  </FormControl>


              </Stack>
              <Button variant='contained' type='submit'>Pay</Button>
              <Alert variant={error.variant} show={error.show}>{error.message}</Alert>
              </Stack>

              

              <input type="hidden" name="issuer" value={state.issuer} />
        </form>
      </div>
</Col>
<Col md={1}></Col>
  </Row>

  <Col md={12} className={classes.footer}>
  <Button variant="outlined" color="error" onClick={()=>history.goBack()}>
                  Cancel
                </Button>
      </Col>
  </>
  )
}

export default Card;
