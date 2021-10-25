import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "../TableComponent";
import { Paper, Typography, Skeleton,Button } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { Link ,NavLink} from "react-router-dom";
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

const heading = [
  {
    Header: "Date Applied",
    accessor: "createdDate",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Refrence No",
    accessor: "reference",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Subsidy Type",
    accessor: "remarks",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Percentage",
    accessor: "subsidyPercentage",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value} {'%'}</Link>
    ),
  },
  {
    Header: "Amount",
    accessor: "amtApplied",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
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
  sx={{ float:'right' }}>New Application</Button></NavLink>)

  return (
    <>
      <Row>
        <Col md={8} style={{ padding: "20px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper elevation={4} sx={{ height: "300px", padding: "10px" }}>
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
                  <Bar dataKey="amtApplied" stackId="a" fill="#8884d8" />
                  <Bar dataKey="createdDate" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          )}
        </Col>

        <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper
              elevation={4}
              sx={{ textAlign: "center", Height: "160px", padding: "20px" }}
            >
              <Typography variant="h4" component="h4">
                Subsidy Metric
              </Typography>
              <table className={classes.tb}>
                <tr>
                  <td>Total Applied</td>
                  <td>
                    {data.length > 0
                      ? "$" + data.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Total Approved</td>
                  <td>
                    {data.length > 0
                      ? "$" + approved_data.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Total Unapproved</td>
                  <td>
                    {data.length > 0
                      ? "$" +
                        unapprove_data.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>Awaiting Approval</td>
                  <td>
                    {data.length > 0
                      ? "$" + pending_data.reduce((a, v) => (a = a + v.amt), 0)
                      : null}
                  </td>
                </tr>
              </table>
            </Paper>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <TableComponent tableBtn={table} loading={loading} data={data} heading={heading} />
        </Col>
      </Row>
    </>
  );
};

export default Subsidy;
