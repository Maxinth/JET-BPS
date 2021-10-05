import React from 'react'
import classes from "./index.module.css"
import { Drawer} from 'antd';
 

import ListSidebarComponent from '../ListSidebarComponent';




const AppDrawer=({...props})=>{



  
  return(
    <>
<Drawer size="large" placement="left" onClose={props.onClose} 
visible={props.visible} 
className={classes.section}>
<ListSidebarComponent/>
      </Drawer>
  

    </>
  )
}

export default AppDrawer