import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Paper, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import { authHeader } from "../../../services/auth_service";
import { useSelector, shallowEqual } from "react-redux";
import classes from "./index.module.css";

const API_URL = "http://localhost:3001";

const CardSection = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isloading, setIsloading] = React.useState(true);
  const [isloading1, setIsloading1] = React.useState(true);
  const [isloading2, setIsloading2] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/wallets?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setIsloading(false);
      });
    axios
      .get(API_URL + "/vouchers?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData1(res.data);
        setIsloading1(false);
      });
    axios
      .get(API_URL + "/subsidy?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData2(res.data);
        setIsloading2(false);
      });
  }, [user.id]);

  let approved_data = data2.filter((dat) => dat.status === "approved");
  let pending_data = data2.filter((dat) => dat.status === "pending");
  
  let pending_data1 = data1.filter((dat) => dat.status === "pending");

  return (
    <>
      <Row>
        <Col md={4} style={{ padding: "30px" }}>
          {isloading && isloading1 && isloading2 ? (
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
        <Col md={4} style={{ padding: "30px" }}>
          {isloading && isloading1 && isloading2 ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper
              elevation={4}
              sx={{ textAlign: "center", Height: "160px", padding: "20px" }}
            >
              <Typography variant="h4" component="h4">
                Subsidy Metric
              </Typography>{" "}
              <table className={classes.tb}>
                <tr>
                  <td>Total Applied</td>
                  <td>
                    {data.length > 0
                      ? "$" + data2.reduce((a, v) => (a = a + v.amtApplied), 0)
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
                  <td>Total Pending</td>
                  <td>
                    {data.length > 0
                      ? "$" + pending_data.reduce((a, v) => (a = a + v.amtApplied), 0)
                      : null}
                  </td>
                </tr>
              </table>
            </Paper>
          )}
        </Col>
        <Col md={4} style={{ padding: "30px" }}>
          {isloading && isloading1 && isloading2 ? (
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
    </>
  );
};

export default CardSection;
