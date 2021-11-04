import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton ,Button} from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { NavLink } from "react-router-dom";
import classes from './index.module.css'
import { format } from "date-fns";
import { motion } from "framer-motion";

const heading = [
  {
    Header: "Date Applied",
    accessor: "createdDate",
    Cell: (props) => (
      format( new Date(props.value),'dd/MM/yyyy')
    ),
  },
  {
    Header: "TXN Refrence",
    accessor: "number",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Voucher Code",
    accessor: "description",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Status",
    accessor: "status",
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
  {
    Header: "Available Amount",
    accessor: "balance",
    Cell: (props) => (
      props.value
    ),
  },
];
const API_URL = "http://localhost:3001";

const Voucher = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/vouchers?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData1(res.data);
        setLoading(false);
      });
      axios
      .get(API_URL + "/wallets?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading1(false);
      });
  }, [user.id]);
  
  let pending_data1 = data1.filter((dat) => dat.status === "pending");
  
  let table=(<NavLink to="/buy" >
  <Button variant="contained" 
sx={{ float: "right",bgcolor:'#9c27b0',
'&:hover':{
  bgcolor:'#9c27b0'
}
}}>Buy Voucher</Button></NavLink>)


  return (
    <>
    <Row>
        <Col md={4} style={{ padding: "30px" }}>
          {loading && loading1 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{x:'150'}}
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
       <Col md={4}></Col>
        <Col md={4} style={{ padding: "30px" }}>
          {loading && loading1 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{x:'-150'}}
              animate={{ x:0}}
              transition={{ delay:0.2,type:'spring',stiffness:110}}
              
              >
            <Paper
              elevation={4}
              sx={{ textAlign: "center", Height: "160px", padding: "20px",bgcolor:'#9c27b0',
              color:'white'}}
            >
              <Typography variant="h4" component="h4">
                Voucher Metric
              </Typography>
              <table className={classes.tb}>
                <tr>
                  <td>Total Purchased</td>
                  <td>
                    {data.length > 0
                      ? "$" + data1.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Total To Redeemed</td>
                  <td>
                    {data.length > 0
                      ? "$" + pending_data1.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>No of Vouchers</td>
                  <td>{data1.length > 0 ? +data1.length : null}</td>
                </tr>
              </table>
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

export default Voucher;
