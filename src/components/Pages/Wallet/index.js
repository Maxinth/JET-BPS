import React from 'react'
import{Container,Row,Col} from 'react-bootstrap'
import {Paper,Box } from '@mui/material'
//import classes from "./index.module.css"





const Wallet=()=>{
 
  const data=
  [
   { "id": 1, 
     "name": "Form2Table", 
     "ref_no": "FKE20200112312",
     "deposit_received":"15000",
     "date":"2/3/2020",
     "wallet":"2569786427345",
     "total_val":"78000"
     

   },
   { "id": 2, 
     "name": "Form3Table", 
     "ref_no": "FKE20200112312",
     "deposit_received":"10000",
     "date":"2/5/2020",
     "wallet":"2568786027345",
     "total_val":"98000"
     

   },
   { "id": 3, 
     "name": "Form4Table", 
     "ref_no": "FTE20200119312",
     "deposit_received":"5000",
     "date":"2/6/2020",
     "wallet":"2569786427345",
     "total_val":"58000"
     

   },
   { "id": 4, 
     "name": "Form1Table", 
     "ref_no": "FTD20200112312",
     "deposit_received":"18000",
     "date":"9/3/2020",
     "wallet":"2769786425345",
     "total_val":"100000"
     

   }
 ]


  return(
<>
<Col md={12}>

<Row>
<Col md={3}>
  <Box>
<Paper elevation={1}>
Wallet Balance
<br/>
$80,0000

</Paper>
</Box>
</Col>
<Col md={9}>


</Col>
</Row>

</Col> 

</>
  )
}


export default Wallet