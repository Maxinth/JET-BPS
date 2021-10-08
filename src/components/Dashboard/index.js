import React from 'react'
import{Row,Col} from 'react-bootstrap'
//import classes from "./index.module.css"
import { DatePicker,Input,Space} from 'antd';
import CardComponent from '../CardComponent';
import {Paper,Box} from "@mui/material"
import {
  
  FindInPageSharp
} from '@mui/icons-material';
import TableComponent from '../TableComponent';

const heading=["Date","Refrence No","Beneficiary details Wallet",
  "Deposit Received","Subsidy Amount","Total value"]

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


const DashBoard=()=>{
 
  const { RangePicker } = DatePicker;
const [value, setValue] = React.useState([null, null]);

  return(
<>
<Row style={{ padding:'20px' }}>
<Col md={4}>
 <CardComponent Title={'Wallet Balance'} subTitle={"$800,0000"}/>
</Col>
<Col md={4}>
 <CardComponent Title={'Total Funds Received'} subTitle={"$800,0000"}/>
</Col>
<Col md={4}>
 <CardComponent Title={'Total Disbursement'} subTitle={"$800,0000"}/>
</Col>
 </Row>

  <Row >
<Col md={6} style={{ padding:'20px' }}>
  <RangePicker size="large" style={{width:'100%'}}/>
  </Col>
<Col md={5} style={{ padding:'20px' }}>

<Input size="large" style={{ borderRadius:'50px',width:'100%' }} 
placeholder="search any column" 
prefix={<FindInPageSharp />}
/>
</Col>
<Col md={1}></Col>
  </Row>
<Row>
<Col md={12}>
<Box sx={{padding:"10px"}}>
<Paper elevation={3} >
<TableComponent data={data} heading={heading}/>
</Paper>
</Box>
</Col>
</Row>
</>
  )
}


export default DashBoard