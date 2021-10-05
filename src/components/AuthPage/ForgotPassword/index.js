import React,{useState} from "react"
import {Form, Input, Button} from "antd"
import ExtendDiv from "../../ExtendDiv";
import {Redirect} from 'react-router-dom'
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
        span: 20,
      }}
    >
      
      <Form.Item
        label="Email / Mobile No"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address or mobile number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      
      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 25,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
        Get new password
        </Button> 

        
      </Form.Item>
    </Form>

</ExtendDiv>

)
      )


  )
}

export default ForgotPassword