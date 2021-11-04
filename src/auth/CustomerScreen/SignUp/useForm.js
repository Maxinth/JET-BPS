import validator from 'validator'
import { useState } from "react";
import { register } from '../../../services/auth_service';
import { useHistory } from 'react-router';


const useForm=()=>{
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let history=useHistory()
    const [error,setError]=useState({
        f_name:false,
        surname:false,
        phone:false,
        email: false,
        password: false,
        c_password:false,
      
      })
      const [errmessage,setErrormessage]=useState({
        f_name:"",
          surname:"",
          phone:"",
          email: "",
          password: "",
          c_password:"",
          check:""
      
      })
        const [values, setValues] = useState({
          f_name:"",
          surname:"",
          phone:"",
          email: "",
          password: "",
          c_password:"",
          country:"ng",
          showPassword: false,
        });
       const Country =(val)=>{
         setValues({ ...values, country: val });
        }
        const setPhone=(value)=>{
            setValues({ ...values,phone: value });

              }
        const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };
      
  
        const handleChange = (prop) => (event) =>{
          let {value}=event.target
          
      if (prop==="email"){
        if(!validator.isEmail(value)){
      setError({...error,[prop]:true})
      setValues({ ...values, [prop]: value });
      setErrormessage({...errmessage,[prop]:'Invalid Email'})
        }else{
          setError({...error,[prop]:false})
          setValues({ ...values, [prop]: value });
          setErrormessage({...errmessage,[prop]:''})
        }
      }else if(prop==="f_name"){
      if(value.length >16){
        setError({...error,[prop]:true})
        setValues({ ...values, [prop]: value });
        setErrormessage({...errmessage,[prop]:'Name too Long'})
      }else{
        setError({...error,[prop]:false})
        setValues({ ...values, [prop]: value });
        setErrormessage({...errmessage,[prop]:''})
      }
      }else if(prop==='surname'){
        if(value.length >16){
          setError({...error,[prop]:true})
          setValues({ ...values, [prop]: value });
        setErrormessage({...errmessage,[prop]:'Name too Long'})
        }else{
          setError({...error,[prop]:false})
        setValues({ ...values, [prop]: value });
        setErrormessage({...errmessage,[prop]:''})
        }
      }else if(prop==='password'){
      if(value.length<8){
        setError({...error,[prop]:true})
        setValues({ ...values, [prop]: value });
        setErrormessage({...errmessage,[prop]:' Password length must be 8 long'})
      }else{
        if (!validator.isStrongPassword(value)){
          setError({...error,[prop]:true})
      setValues({ ...values, [prop]: value });
      setErrormessage({...errmessage,[prop]:'Not a Strong Password'})
        }else{
          setError({...error,[prop]:false})
      setValues({ ...values, [prop]: value });
      setErrormessage({...errmessage,[prop]:''})
        }
      } 
        }else if(prop === 'c_password'){
        if (values.password !== value){
           setError({...error,c_password:true})
        setValues({ ...values, c_password: value });
        setErrormessage({...errmessage,c_password:'Passwors does not Match'})
       
      }else{
        setError({...error,c_password:false})
        setValues({ ...values, c_password: value});
        setErrormessage({...errmessage,c_password:''})
      }
      }
        }
          
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
      
        const handleCheck = (event) => {
          setChecked(event.target.checked);
          setErrormessage({...errmessage,check:''})
  };
 

const handleSubmit=(e)=>{
  let data={
    email:values.email,
    password:values.password,
    name:values.f_name+ ' '+values.surname,
    city:values.country,
    phone: `+${values.phone}`,
    firstName:values.f_name,
    lastName:values.surname,
    role:'customer'
  }
e.preventDefault()
setLoading(true)
if(!checked){
  setErrormessage({...errmessage,check:'Please you must Agree to our Privacy policy'})
  setLoading(false)
}else{
  setErrormessage({...errmessage,check:''})
register(data).then((res)=>{
  setLoading(false)
history.push('/customer/login')
}).catch((err)=>{
  setLoading(false)
  setOpen(true)
})

  
}
}

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }
  setOpen(false);
}
  return {
    handleChange,
        handleClickShowPassword,
        handleSubmit,
        handleMouseDownPassword,
        error,errmessage,
        values,
        handleCheck,
        handleClose,
        open,
        loading,
        checked,
        setPhone,
        Country }
}

export default useForm
