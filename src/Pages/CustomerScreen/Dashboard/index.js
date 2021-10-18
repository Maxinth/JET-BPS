import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../../../components/CardComponent";
import { Paper, Box } from "@mui/material";
import axios from "axios";
import TableComponent from "../../../components/TableComponent";
import CardSection from "../CardSection";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";

const heading = [
  { Header: "Date Applied", accessor: "createdDate" },
  { Header: "Refrence No", accessor: "reference" },
  { Header: "Subsidy Type", accessor: "description" },
  { Header: "Paying Agency", accessor: "type" },
  { Header: "Amount", accessor: "amt" },
  { Header: "Status", accessor: "status" },
];
const API_URL = "http://localhost:3001";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API_URL + "/transactions?userId=" + user.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user.id]);

  console.log(data);
  return (
    <>
      <CardSection />

      <Row>
        <Col md={6} style={{ padding: "20px" }}></Col>
        <Col md={5} style={{ padding: "20px" }}></Col>
        <Col md={1}></Col>
      </Row>
      <Row>
        <Col md={12}>
          <Box sx={{ padding: "10px" }}>
            <Paper elevation={3}>
              <TableComponent loading={loading} data={data} heading={heading} />
            </Paper>
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
