import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton } from "@mui/material";
import { authHeader } from "../../../services/auth_service";
import { NavLink } from "react-router-dom";
import classes from "./index.module.scss";
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
import { motion } from "framer-motion";
import { useAppSelector } from '../../../store/store';
import { format } from "date-fns";


const columns: any = [
  {
    title: "Date",
    field: "createdDate",
    render: (row: any) => <span>{format(new Date(row["createdDate"]), 'yyyy-MM-dd')}</span>

  },
  {
    title: "Description",
    field: "description",

  },
  {
    title: "TXN Refrence NO",
    field: "number",

  },
  {
    title: "Type",
    field: "type",

  },
  {
    title: "Amount",
    field: "amt",

  },

];
const API_URL = "http://localhost:3001";

const Wallet = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/wallets?userId=" + user!.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user])


  let table = (<NavLink to="/fund" >

    <Button
      style={{ float: 'right' }}
    >Fund Wallet</Button>

  </NavLink>)

  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{ x: '75' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}

            >
              <Paper
                elevation={4}
                style={{
                  textAlign: "center", height: "160px", padding: "20px",
                  color: '#2f5561'
                }}
              >
                <Typography variant="h4" component="h4">
                  Wallet Balance
                </Typography>{" "}
                <Typography variant="h6" component="h6">
                  {data.length > 0 ? "$" + data![0].balance : null}
                </Typography>
              </Paper>
            </motion.div>
          )}
        </Col>


        <Col md={4}></Col>
        <Col md={12} style={{ padding: "20px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{ y: '55' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 110 }}

            >
              <Paper elevation={4} sx={{ height: "500px", padding: "10px" }}>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}

          >
            <TableComponent tableBtn={table} loading={loading} data={data} column={columns} />
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default Wallet
