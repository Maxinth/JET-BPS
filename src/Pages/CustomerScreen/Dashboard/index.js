import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Paper, Box, Skeleton, Stack } from "@mui/material";
import axios from "axios";
import TableComponent from "../../../components/TableComponent";
import CardSection from "../CardSection";
import { useSelector, shallowEqual } from "react-redux";
import { authHeader } from "../../../services/auth_service";
import { Link } from "react-router-dom";

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
    accessor: "description",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
  {
    Header: "Paying Agency",
    accessor: "type",
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
    Header: "Status",
    accessor: "status",
    Cell: (props) => (
      <Link to={`/trans/${props.row.original.id}`}>{props.value}</Link>
    ),
  },
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
            {loading ? (
              <Stack spacing={4}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={800} height={100} />
              </Stack>
            ) : (
              <Paper elevation={5}>
                <TableComponent data={data} heading={heading} />
              </Paper>
            )}
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
