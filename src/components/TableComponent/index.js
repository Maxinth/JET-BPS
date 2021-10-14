import React from 'react'
import {Table} from 'react-bootstrap'
import TableHeader from '../TableHeader'
//import classes from 'index.module.css'

const TableComponent=(props)=>{


  

  return(
<>
<Table striped hover responsive>
  <thead>
    <TableHeader heading={props.heading}/>
  </thead>
  <tbody>
    {
    props.data.map((row,index)=>
      <tr key={index}>
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