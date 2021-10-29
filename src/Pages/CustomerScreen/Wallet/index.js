import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton,Button } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { Link ,NavLink} from "react-router-dom";
import classes from "./index.module.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { format } from "date-fns";
  import { motion } from "framer-motion";
  

const heading = [
  {
    Header: "Date",
    accessor: "createdDate",
    Cell: (props) => (
      format( new Date(props.value),'dd/MM/yyyy')
    ),
  },
  {
    Header: "Description",
    accessor: "description",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "TXN Refrence NO",
    accessor: "number",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Amount",
    accessor: "amt",
    Cell: (props) => (
      props.value
    ),
  },
  
];
const API_URL = "http://localhost:3001";

const Wallet = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/wallets?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user.id])

 
  let table=(<NavLink to="/fund" >
    <Button variant="contained" 
  sx={{ float: "right",bgcolor:'#9c27b0',
  '&:hover':{
    bgcolor:'#9c27b0'
  }
  }}>Fund Wallet</Button></NavLink>)

  return (
    <>
      <Row>
      <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{x:'-55'}}
              animate={{ x:0}}
              transition={{ delay:0.2,type:'spring',stiffness:110}}
              
              >
            <Paper
              elevation={4}
              sx={{ textAlign: "center", height: "160px", padding: "20px",bgcolor:'#9c27b0',
              color:'white'}}
                          >
              <Typography variant="h4" component="h4">
                Wallet Balance
              </Typography>{" "}
              <Typography variant="h6" component="h6">
                {data.length > 0 ? "$" + data[0].balance : null}
              </Typography>
            </Paper>
            </motion.div>
          )}
        </Col>

          
        <Col md={8} style={{ padding: "20px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{x:'-55'}}
              animate={{ x:0}}
              transition={{ delay:0.2,type:'spring',stiffness:110}}
              
              >
            <Paper elevation={4} sx={{ height: "300px", padding: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amt" stroke="#9c27b0" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="balance" stroke="rgb(238, 189, 235)" />
        </LineChart>
      </ResponsiveContainer>
            </Paper>
            </motion.div>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={12} className={classes.content}>
        <motion.div
              initial={{opacity:0}}
              animate={{ opacity:1}}
              transition={{ delay:0.2,duration:0.3}}
              
              >
          <TableComponent tableBtn={table} loading={loading} data={data} heading={heading} />
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default Wallet
