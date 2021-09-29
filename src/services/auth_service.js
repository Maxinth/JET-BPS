import axios from 'axios'

const API_URL= "http://localhost:3000"



export const getUser=(id)=>{
  return axios.get(API_URL +"/user/"+id)
  .then((res)=>{
    return res.data
  })
}

export const register = (name,email,password)=>{
return axios.post(API_URL +"/register",{
name,email, password
}).then((res)=>{
  return res.data
})
}

export const login =(email,password)=>{
return axios.post(API_URL + "/user/login",{
  email,
  password
}).then((res)=>{
  if (res.data.token){
    localStorage.setItem("user",JSON.stringify(res.data))
  }
  return res.data
})
}

export const logout =()=>{
  localStorage.removeItem("user")
}

export const authHeader=()=>{
const user =JSON.parse(localStorage.getItem("user"))
if(user && user.token){
  return {Authorization: 'Bearer' + user.token}
}else{
  return {
    
  }
}
}