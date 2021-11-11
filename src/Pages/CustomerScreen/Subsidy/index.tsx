import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Paper, Typography, Skeleton } from "@mui/material";
import { authHeader } from "../../../services/auth_service";
import { NavLink } from "react-router-dom";
import classes from "./index.module.scss";
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
import { motion } from 'framer-motion'
import { useAppSelector } from '../../../store/store';
import { format } from "date-fns";



const columns: any = [
  {
    title: "Date Applied",
    field: "createdDate",
    render: (row: any) => <span>{format(new Date(row["createdDate"]), 'yyyy-MM-dd')}</span>
  },
  {
    title: "Refrence No",
    field: "reference",

  },
  {
    title: "Subsidy Type",
    field: "remarks",

  },
  {
    title: "Percentage",
    field: "subsidyPercentage",

  },
  {
    title: "Amount",
    field: "amtApplied",

  },
  {
    title: "Status",
    field: "status",

  },
  {
    title: "Approved",
    field: "city",

  },
];
const API_URL = "http://localhost:3001";

const Subsidy = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/subsidy?userId=" + user!.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user]);

  let approved_data = data.filter((dat: any) => dat.status === "approved");
  let pending_data = data.filter((dat: any) => dat.status === "pending");
  let unapprove_data = data.filter((dat: any) => dat.status === "rejected");

  let table = (<NavLink to="/application" >
    <Button
      style={{
        float: "right"

      }}>New Application</Button></NavLink>)

  return (
    <>
      <Row>
        <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{ y: '55' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 140 }}

            >

              <Paper
                elevation={4}
                style={{
                  textAlign: "left", height: "180px", padding: "20px",
                  color: '#2f5561'

                }}
              >
                <Typography variant="h4" component="h4">
                  Subsidy Metric
                </Typography>
                <table className={classes.tb}>
                  <tr>
                    <td>Total Applied</td>
                    <td>
                      {data.length > 0
                        ? "$" + data.reduce((a: any, v: any) => (a = a + v.amtApplied), 0)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Approved</td>
                    <td>
                      {data.length > 0
                        ? "$" + approved_data.reduce((a: any, v: any) => (a = a + v.amtApplied), 0)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Unapproved</td>
                    <td>
                      {data.length > 0
                        ? "$" +
                        unapprove_data.reduce((a: any, v: any) => (a = a + v.amtApplied), 0)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Awaiting Approval</td>
                    <td>
                      {data.length > 0
                        ? "$" + pending_data.reduce((a: any, v: any) => (a = a + v.amtApplied), 0)
                        : null}
                    </td>
                  </tr>
                </table>
              </Paper>
            </motion.div>
          )}
        </Col>
        <Col md={4}></Col>
        <Col md={4}></Col>
        <Col md={12} style={{ padding: "20px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{ x: '55' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}

            >
              <Paper elevation={4} sx={{ height: "450px", padding: "10px" }}>
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
                    <Bar dataKey="amtApplied" stackId="a" fill="rgb(88, 168, 138,0.5)" />
                    <Bar dataKey="createdDate" stackId="a" fill="rgb(167, 240, 212,0.3)" />
                  </BarChart>
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

export default Subsidy;
