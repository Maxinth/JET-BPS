import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Paper, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import { authHeader } from "../../../services/auth_service";
import { useSelector, shallowEqual } from "react-redux";

const API_URL = "http://localhost:3001";

const CardSection = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = React.useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/wallets?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setIsloading(false)
      });
      axios
      .get(API_URL + "/vouchers?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setIsloading(false)
      });
  }, [user.id]);

  return (
    <>
      <Row>
        <Col md={4} style={{ margin: "10px" }}>
          {isloading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <Paper
              elevation={4}
              sx={{ textAlign: "center", height: "130px", padding: "20px" }}
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
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default CardSection;
