import React from 'react'


const TableHeader=(props)=>{


  return(

    <>
    <tr>
    {
    props.heading.map((heads,index)=>
      <th key={index}>{heads}</th>
      )
      }
      </tr>
    </>
  )
}

export default TableHeader