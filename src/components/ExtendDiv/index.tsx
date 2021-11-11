import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./index.module.scss";

const ExtendDiv: React.FC = (props) => {
  return (
    <>
      <Col md={12}>


      </Col>

      <Row>
        <Col md={4}></Col>
        <Col md={5} className={classes.Section}>
          <div>{props.children}</div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ExtendDiv;
