import React from 'react'
import{Row,Col} from 'react-bootstrap'
//import classes from "./index.module.css"
import { DatePicker,Input} from 'antd';
import CardComponent from '../CardComponent';
import {
  SearchOutlined
} from '@ant-design/icons';
import TableComponent from '../TableComponent';

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


  return(
<>
  <CardComponent/>
  <Row style={{ padding:'17px' }}>
<Col >
  <RangePicker size="large"/>
  </Col>
<Col>
<Input size="large" style={{ borderRadius:'50px' }} 
placeholder="search any column" 
prefix={<SearchOutlined />}
/>
</Col>
<Col md={2}></Col>
  </Row>
<Row>
<Col md={12}>
<TableComponent data={data}/>
</Col>
</Row>
</>
  )
}


export default DashBoard