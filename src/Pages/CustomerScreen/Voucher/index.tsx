import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton } from "@mui/material";
import { authHeader } from "../../../services/auth_service";
import { NavLink } from "react-router-dom";
import classes from './index.module.scss'
import { motion } from "framer-motion";
import { useAppSelector } from '../../../store/store';
import { format } from "date-fns";

const columns: any = [
  {
    title: "Date Applied",
    field: "createdDate",
    render: (row: any) => <span>{format(new Date(row["createdDate"]), 'yyyy-MM-dd')}</span>
  },
  {
    title: "TXN Refrence",
    field: "number",

  },
  {
    title: "Voucher Code",
    field: "description",

  },
  {
    title: "Status",
    field: "status",

  },
  {
    title: "Amount",
    field: "amt",

  },
  {
    title: "Available Amount",
    field: "balance",

  },
];
const API_URL = "http://localhost:3001";

const Voucher = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<any>([]);
  const [data1, setData1] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/vouchers?userId=" + user!.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData1(res.data);
        setLoading(false);
      });
    axios
      .get(API_URL + "/wallets?userId=" + user!.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading1(false);
      });
  }, [user]);

  let pending_data1 = data1.filter((dat: any) => dat.status === "pending");

  let table = (<NavLink to="/buy" >
    <Button
      style={{
        float: "right",

      }}>Buy Voucher</Button></NavLink>)


  return (
    <>
      <Row>
        <Col md={4} style={{ padding: "30px" }}>
          {loading && loading1 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{ x: '150' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 110 }}

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
              initial={{ x: '-150' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 110 }}

            >
              <Paper
                elevation={4}
                style={{
                  textAlign: "center", height: "160px", padding: "20px",
                  color: '#2f5561'
                }}
              >
                <Typography variant="h4" component="h4">
                  Voucher Metric
                </Typography>
                <table className={classes.tb}>
                  <tr>
                    <td>Total Purchased</td>
                    <td>
                      {data.length > 0
                        ? "$" + data1.reduce((a: any, v: any) => (a = a + v.amt), 0)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Total To Redeemed</td>
                    <td>
                      {data.length > 0
                        ? "$" + pending_data1.reduce((a: any, v: any) => (a = a + v.amt), 0)
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

export default Voucher;
