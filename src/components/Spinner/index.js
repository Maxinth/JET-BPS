import React from 'react'
import classes from "./index.module.scss"
import ReactLoading from 'react-loading'

const Spinner=({...props})=>{

  return(
    <div className={classes.Spinner}>
<ReactLoading
  type='cylon'
  color="#9c27b0" 
  height={"25%"}
   width={'25%'}
   className={classes.svg }
  />
  
  <span className={classes.Title}>{props.title}</span>
</div>
  )
}

export default Spinner