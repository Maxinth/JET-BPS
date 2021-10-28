import { useState } from "react";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    
    validate
  } from "../../../../shared/utility";
  
  
const useForm=()=>{
    const [state,setState]=useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
        issuer:''
      })

    const [error,setError]=useState({})

  const  handleCallback = ({ issuer }, isValid) => {
      if (isValid) {
        setState({...state, issuer:issuer });
      }
    };
    const handleInputFocus = (e) => {
        setState({...state, focus: e.target.name });
      }
    
    const  handleInputChange = ({target}) => {
      
        if (target.name === "number") {
          target.value = formatCreditCardNumber(target.value);
          
          console.log(target.value) 
        } 
        
        
        
        if (target.name === "expiry") {
        
          target.value = formatExpirationDate(target.value);
          
        } 
        
        
        if (target.name === "cvc") {
        
          target.value = formatCVC(target.value);
          
        }
        setState({...state, [target.name]: target.value });   
      }

    
     const handleSubmit = (e) => {
        e.preventDefault();  
        setError(validate(state))
        
      };


return {handleInputChange,handleInputFocus,handleCallback,handleSubmit,state,error}
}
export default useForm