import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton,Button } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { NavLink} from "react-router-dom";
import classes from "./index.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import {motion} from 'framer-motion'

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
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Subsidy Type",
    accessor: "remarks",
    Cell: (props) => (
      props.value
    ),
  },
  {
    Header: "Percentage",
    accessor: "subsidyPercentage",
    Cell: (props) => (
      props.value + '%'
    ),
  },
  {
    Header: "Amount",
    accessor: "amtApplied",
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
];
const API_URL = "http://localhost:3001";

const Subsidy = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/subsidy?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user.id]);

  let approved_data = data.filter((dat) => dat.status === "approved");
  let pending_data = data.filter((dat) => dat.status === "pending");
  let unapprove_data = data.filter((dat) => dat.status === "rejected");

  let table=(<NavLink to="/application" >
    <Button variant="contained" 
  sx={{ float: "right",bgcolor:'#9c27b0',
  '&:hover':{
    bgcolor:'#9c27b0'
  }
  }}>New Application</Button></NavLink>)

  return (
    <>
      <Row>
        <Col md={8} style={{ padding: "20px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
            initial={{ x:'55'}}
            animate={{ x: 0}}
            transition={{ delay:0.3, type:'spring',stiffness:130}}
            
            >
            <Paper elevation={4} sx={{ height: "400px", padding: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={100}
                  height={600}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="reference" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amtApplied" stackId="a" fill="#9c27b0" />
                  <Bar dataKey="createdDate" stackId="a" fill="rgb(238, 189, 235)" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
            </motion.div>
          )}
        </Col>

        <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
            initial={{ y:'55'}}
            animate={{ y: 0}}
            transition={{ delay:0.3, type:'spring',stiffness:140}}
            
            >
              
            <Paper
              elevation={4}
              sx={{ textAlign: "left", Height: "160px", padding: "20px", bgcolor:'#9c27b0',
               color:'white'}}
            >
              <Typography variant="h4" component="h4">
                Subsidy Metric
              </Typography>
              <table className={classes.tb}>
                <tr>
                  <td>Total Applied</td>
                  <td>
                    {data.length > 0
                      ? "$" + data.reduce((a, v) => (a = a + v.amtApplied), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Total Approved</td>
                  <td>
                    {data.length > 0
                      ? "$" + approved_data.reduce((a, v) => (a = a + v.amtApplied), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Total Unapproved</td>
                  <td>
                    {data.length > 0
                      ? "$" +
                        unapprove_data.reduce((a, v) => (a = a + v.amtApplied), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Awaiting Approval</td>
                  <td>
                    {data.length > 0
                      ? "$" + pending_data.reduce((a, v) => (a = a + v.amtApplied), 0)
                      : null}
                  </td>
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

export default Subsidy;
