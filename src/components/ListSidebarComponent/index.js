import React from 'react'
import {List,Box} from '@mui/material'
import {Dashboard,QrCode,MonetizationOn,Send,
  AccountBalanceWallet,Help
} from '@mui/icons-material'
import classes from "./index.module.css"
import {useRouteMatch} from 'react-router-dom'
import ListComponent from '../ListComponent'



const ListSidebarComponent=()=>{
  
const {path}=useRouteMatch()


  

  return(
    <>
    <Box sx={{ width: '100%'}}>
<div className={classes.Header}><span>BPS</span></div>

<List>
  <ListComponent path={`${path}/`}
   Icon={<Dashboard sx={{ color:'white' }}/>}
   event="dashboard"
   title={'Dashboard'}
   />

<ListComponent path={`${path}/deposit`}
   Icon={<Send sx={{ color:'white' }}/>}
   event="deposit"
   title='Beneficiary Deposit'
   />
   <ListComponent path={`${path}/wallet`}
   Icon={<AccountBalanceWallet sx={{ color:'white' }}/>}
   event="wallet"
   title='Wallet Transfer'
   />
    <ListComponent path={`${path}/voucher`}
   Icon={<MonetizationOn sx={{ color:'white' }}/>}
   event="voucher"
   title='Voucher Sales'
   />
          
</List>
  
  
<List style={{ marginTop:'80px' }}>
<ListComponent path={`${path}/code`}
   Icon={<QrCode sx={{ color:'white' }}/>}
   event="code"
   title='Generate QRcode'
   />
          </List>
          

<List style={{ marginTop:'150px' }}>
<ListComponent path={`${path}/help`}
   Icon={<Help sx={{ color:'white' }}/>}
   event="help"
   title='About'
   />
</List>
</Box>
    </>
  )
}

export default ListSidebarComponent