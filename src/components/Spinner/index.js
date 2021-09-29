import React from 'react'
import {Spin} from "antd"
import classes from "./index.module.scss"

const Spinner=({...props})=>{

  return(
    <div className={classes.Spinner}>
<Spin size="large" tip={props.tip}  />
</div>
  )
}

export default Spinner