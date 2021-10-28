import { Button } from "@mui/material";
import React from "react";
import {Container ,Row,Col} from "react-bootstrap"
import { useHistory } from "react-router";
import classes from './index.module.css'

const Success=(props)=>{

let history=useHistory()


    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                </Col>
                <Col md={6} className={classes.Section}>
<h3>Application Submitted</h3>
<br/>

<h4>Reference Number : {" "} {props.reference}</h4>

<span>Application Reference Number will be required in future correnspondences</span><br/>
<span>Please keep a note of it</span>
<br/>

<Button variant="contained" color="error" onClick={()=> history.push("/customer") }>Leave</Button>
{" "}
<Button variant="contained" onClick={()=>window.print()}>Print this page</Button>
                </Col>
                <Col md={3}></Col>
            </Row>

        </Container>
        
        
        s
        </>
    )
}
export default Success