import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "../TableComponent";
import { Paper, Typography, Skeleton ,Button} from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { Link,NavLink } from "react-router-dom";
import classes from './index.module.css'

const heading = [
  {
    Header: "Date Applied",
    accessor: "createdDate",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "TXN Refrence",
    accessor: "number",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Voucher Code",
    accessor: "description",
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
  {
    Header: "Amount",
    accessor: "amt",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Available Amount",
    accessor: "balance",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
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
  let approved_data1 = data1.filter((dat) => dat.status === "approved");
  let pending_data1 = data1.filter((dat) => dat.status === "pending");
  
  let table=(<NavLink to="/buy" >
  <Button variant="contained" 
sx={{ float:'right' }}>Buy Voucher</Button></NavLink>)


  return (
    <>
    <Row>
        <Col md={4} style={{ padding: "30px" }}>
          {loading && loading1 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper
              elevation={4}
              sx={{ textAlign: "center", height: "160px", padding: "20px" }}
            >
              <Typography variant="h4" component="h4">
                Wallet Balance
              </Typography>{" "}
              <Typography variant="h6" component="h6">
                {data.length > 0 ? "$" + data[0].balance : null}
              </Typography>
            </Paper>
          )}
        </Col>
       <Col md={4}></Col>
        <Col md={4} style={{ padding: "30px" }}>
          {loading && loading1 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper
              elevation={4}
              sx={{ textAlign: "center", Height: "160px", padding: "20px" }}
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
          )}
        </Col>
      </Row>




      <Row>
        <Col md={12} className={classes.content}>
          <TableComponent tableBtn={table} loading={loading} data={data} heading={heading} />
        </Col>
      </Row>
    </>
  );
};

export default Voucher;
