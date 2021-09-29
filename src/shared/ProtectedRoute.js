import React from "react";
import { Redirect,Route} from "react-router-dom";

const ProtectedRoute = ({component: Component,...rest}) => {
 
  const us=JSON.parse(localStorage.getItem("user"))
const isLoggedIn= us? true:false
  
  return( 
    <Route {...rest} render={
      (props) => isLoggedIn ? <Component {...rest} {...props}/>
      :<Redirect to={{ pathname: "/login" }} />
    } 
    />
)
}

export default ProtectedRoute;
