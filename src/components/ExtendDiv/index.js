import React from 'react'
import {Col,Row} from 'react-bootstrap'
import classes from "./index.module.scss"
import {Layout} from "antd"


const ExtendDiv =({...props})=>{

const { Content } = Layout;
  return(

<Row>
  <Col md={4}></Col>
<Col md={4} >
  <Layout className={classes.Section}>
      <Content style={{padding:'5%'}}>
{props.children}
</Content>
    </Layout>
</Col>
<Col md={4}></Col>
</Row>
  
  )
}

export default ExtendDiv