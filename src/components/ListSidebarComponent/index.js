import React from 'react'

import classes from "./index.module.css"

import {
  QrcodeOutlined,
  WalletOutlined,
  DollarOutlined,
  DashboardOutlined,
  SendOutlined,
  CaretLeftOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import {Link,useRouteMatch,useLocation} from 'react-router-dom'




const ListSidebarComponent=()=>{
  var even="dashboard"
const {path}=useRouteMatch()
const {pathname}=useLocation()

  
  
  const onToggle=()=>{
  
      if(pathname=== path+"/voucher"){
        
        even="voucher"
      }
       if(pathname === path+"/wallet"){
       
        even="wallet"
      }
      if(pathname === path+"/deposit"){
       
        even="deposit"
      }
      if(pathname === path+"/"){   
         
         even="dashboard"
    }
  }
  if(pathname=== path+"/voucher"){
    
    even="voucher"
  }
   if(pathname === path+"/wallet"){
    
    even="wallet"
  }
  if(pathname === path+"/deposit"){
    
    even="deposit"
  }
  if(pathname === path+"/"){   
     even="dashboard"
}
 

  return(
    <>
<div className={classes.Header}><span>BPS</span></div>
<ul >
  <li className={even==="dashboard"? classes.active:null} onClick={onToggle}>
    <Link to={`${path}/`}><DashboardOutlined />{ "   "}DashBoard </Link> 
    {even==="dashboard"?<CaretLeftOutlined className={classes.icon}/> :null}</li>
  <li className={even==="deposit"? classes.active:null}  onClick={onToggle}>
    <Link to={`${path}/deposit`}><SendOutlined />{ "   "}Benefiaciary Deposit</Link>
     {even==="deposit"?<CaretLeftOutlined className={classes.icon}/> :null}</li>
  <li className={even==="wallet"? classes.active:null}  onClick={onToggle}>
    <Link to={`${path}/wallet`}><WalletOutlined />{ "   "}Wallet Transfer </Link> 
    {even==="wallet"?<CaretLeftOutlined className={classes.icon}/> :null}</li>
  <li className={even==="voucher"? classes.active:null}  onClick={onToggle}>
    <Link to={`${path}/voucher`}><DollarOutlined />{ "   "}Voucher Sales </Link> 
    {even==="voucher"?<CaretLeftOutlined className={classes.icon}/> :null}</li>
</ul>
<ul style={{ marginTop:'80px' }}>
  <li><QrcodeOutlined/>{ "   "}Generate QR Code</li>
</ul>
<ul style={{ marginTop:'140px' }}>
  <li><QuestionCircleOutlined />{ "   "}About</li>
</ul>
    </>
  )
}

export default ListSidebarComponent