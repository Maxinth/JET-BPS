import React from "react";
import classes from "./index.module.scss";
import ReactLoading from "react-loading";

interface Iprops {
  title: string
}
const Spinner: React.FC<Iprops> = (props) => {
  return (
    <div className={classes.Spinner}>
      <ReactLoading
        type="cylon"
        height={"25%"}
        color="#1F3F49"
        width={"25%"}
        className={classes.svg}
      />

      <span className={classes.Title}>{props.title} {'...'}</span>
    </div>
  );
};

export default Spinner;
