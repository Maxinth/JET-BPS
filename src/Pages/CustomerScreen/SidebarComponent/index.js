import React from 'react'
import {Col} from 'react-bootstrap'
import ListSidebarComponent from '../ListSidebarComponent'
import classes from './index.module.css'






const SidebarComponent=()=>{
  
  


  return(
<>
<Col md={2} className={classes.sidebar}>
  <ListSidebarComponent/>
</Col>
</>
  )
}

export default SidebarComponent