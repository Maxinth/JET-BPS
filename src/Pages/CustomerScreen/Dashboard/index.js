import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import CardSection from "../CardSection";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import classes from './index.module.css'
import { format } from "date-fns";
import { motion } from "framer-motion";




const API_URL = "http://localhost:3001";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

  const heading = [
    {
      Header: "Date Applied",
      accessor: "createdDate",
      Cell: (props) => (
       
         format( new Date(props.value),'dd/MM/yyyy')
      ),
    },
    {
      Header: "Refrence No",
      accessor: "reference",
      Cell: (props) =>  props.value
      
    },
    {
      Header: "Subsidy Type",
      accessor: "description",
      Cell: (props) => (
        props.value
      ),
    },
    {
      Header: "Paying Agency",
      accessor: "type",
      Cell: (props) => (
        props.value
      ),
    },
    {
      Header: "Amount",
      accessor: "amt",
      Cell: (props) => 
        props.value
      
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (props) => (
        props.value
      ),
    },
  ];
  useEffect(() => {
    axios
      .get(API_URL + "/transactions?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user.id]);

  
  return (
    <>
   
      <CardSection />
      <Row>
        <Col md={12} className={classes.content}>
        <motion.div
              initial={{opacity:0}}
              animate={{ opacity:1}}
              transition={{ delay:0.2,duration:0.3}}
              
              >
          <TableComponent loading={loading} data={data} heading={heading} />
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
