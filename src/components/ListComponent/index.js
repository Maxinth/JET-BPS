import React from 'react'
import {ListItem,ListItemButton,ListItemText,ListItemIcon} from '@mui/material'
import classes from "./index.module.css"
import {Link,useRouteMatch,useLocation} from 'react-router-dom'



const ListComponent=({...props})=>{
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
<ListItem  disablePadding className={even===props.event? classes.active:null} onClick={onToggle}>
<Link style={{textDecoration:'none'}} to={props.path}>
            <ListItemButton>
              <ListItemIcon>
                {props.Icon}
              </ListItemIcon>
              <ListItemText primary={props.title} />
            </ListItemButton>
            </Link>
          </ListItem>
          

    </>
  )
}

export default ListComponent