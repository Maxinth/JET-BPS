import { Paper } from "@mui/material";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { useHistory } from "react-router";
import classes from './index.module.scss'

interface Iprops {
    reference: string
}
const Success: React.FC<Iprops> = (props) => {

    let history = useHistory()


    return (
        <>
            <Container fluid style={{ backgroundColor: '#2f5561', height: '100vh' }}>

                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={6} >
                        <Paper elevation={4} className={classes.Section}>
                            <h3>Application Submitted</h3>
                            <br />

                            <h4>Reference Number : {" "} {props.reference}</h4>

                            <span>Application Reference Number will be required in future correnspondences</span><br />
                            <span>Please keep a note of it</span>
                            <br />
                            <Col md={12}>
                                <Button variant="danger"
                                    onClick={() => history.push("/customer")}
                                    style={{ float: 'left', marginTop: '10px' }}
                                >Leave</Button>

                                <Button variant="primary" onClick={() => window.print()}


                                    style={{ float: 'right', marginTop: '10px' }}
                                >Print this page</Button>
                            </Col>

                        </Paper>
                    </Col>
                    <Col md={3}></Col>
                </Row>


            </Container>



        </>
    )
}
export default Success