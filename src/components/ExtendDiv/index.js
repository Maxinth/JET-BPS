import React from 'react'
import {Col,Row} from 'react-bootstrap'
import classes from "./index.module.scss"
import {Layout} from "antd"


const ExtendDiv =({...props})=>{

const { Content } = Layout;
  return(
    <>
<Col md={12}>
<div>
<select style={{ float:"right",marginTop:"30px" ,marginRight:"20px",padding:"4px"}} >
  <option selected>Select Language</option>
  <option>English</option>
  <option>Germany</option>
</select>
</div>

</Col>

<Row>
  <Col md={4}></Col>
<Col md={5} >
  <Layout className={classes.Section}>
      <Content >
{props.children}
</Content>
    </Layout>
</Col>
<Col md={3}></Col>
</Row>
  </>
  )
}

export default ExtendDiv