import React,{useState} from "react"
import {Form, Input, Button} from "antd"
import ExtendDiv from "../../ExtendDiv";
import {NavLink,Redirect} from 'react-router-dom'
import {useSelector, shallowEqual} from "react-redux"
import Spinner from  "../../Spinner"

const ForgotPassword=()=>{
  const [form]=Form.useForm()
  const [loading,setLoading]=useState(false)
  const {token} = useSelector((state) => state.auth, shallowEqual)
const islogged = token?true:false
    
    
const onSubmit=()=>{
  let user=form.getFieldsValue()
  console.log(user)
}

  return(
    loading ?(
      <Spinner tip="Please Wait..."/>
      ):(
      islogged? <Redirect to="/index/dashboard"/>
      :
(
<ExtendDiv>
<Form
     form={form}
     name="basic"
      
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      
    >
      
      <Form.Item
        label="Email/Mobile No:"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
        Send
        </Button> 

        <NavLink to="/index" style={{ marginLeft:"15px"}}> Login here</NavLink>
      </Form.Item>
    </Form>

</ExtendDiv>

)
      )


  )
}

export default ForgotPassword