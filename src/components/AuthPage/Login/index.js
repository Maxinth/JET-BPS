import React,{useState} from "react"
import {Form,Input, Button,message} from "antd"
import ExtendDiv from "../../ExtendDiv";
import {NavLink,Redirect,useHistory} from 'react-router-dom'
import {useDispatch,useSelector, shallowEqual} from "react-redux"
import {signin} from '../../../slices/auth'
import Spinner from  "../../Spinner"

const Login=(props)=>{
const [form]=Form.useForm()
const [loading,setLoading]=useState(false)
const {token} = useSelector((state) => state.auth, shallowEqual)
const islogged = token?true:false
  const dispatch =useDispatch()
  const history=useHistory()

  const onSubmit=()=>{
    let user=form.getFieldsValue()
    setLoading(true)
    dispatch(signin(user)).unwrap().then(()=>{
      history.push("/index/dashboard")
      setLoading(false)
  }).catch((err)=>{
setLoading(false)
message.error("Login Errors Occured")
  })
  }
  
  return(
loading ?(
<Spinner tip={"Logging..."}/>
):(
islogged? <Redirect to="/index/dashboard"/>
:

<ExtendDiv>
<Form 
form={form}
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

    
      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Login
        </Button> 

        <NavLink to="/index/forgot" style={{ marginLeft:"20px"}}> Forgot Password?</NavLink>
      </Form.Item>
    </Form>



</ExtendDiv>
)

      


  )
}

export default Login