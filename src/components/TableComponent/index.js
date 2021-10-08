import React from 'react'
import {Table} from 'react-bootstrap'
import TableHeader from '../TableHeader'
//import classes from 'index.module.css'

const TableComponent=(props)=>{

  const heading=["Date","Refrence No","Beneficiary details Wallet",
  "Deposit Received","Subsidy Amount","Total value"]

  

  return(
<>
<Table striped hover responsive>
  <thead>
    <TableHeader heading={heading}/>
  </thead>
  <tbody>
    {
    props.data.map((row)=>
      <tr>
  <td>{row.date}</td>
 <td>{row.ref_no}</td>
 <td>{row.name}{"  "} { row.wallet}</td>
 <td>{row.deposit_received}</td>
 <td>{ row.total_val-row.deposit_received }</td>
 <td>{row.total_val}</td>
    </tr>
    
    )
    }
  </tbody>
</Table>

</>
  )
}

export default TableComponent