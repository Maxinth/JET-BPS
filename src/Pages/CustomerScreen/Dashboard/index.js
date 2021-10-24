import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TableComponent from "../TableComponent";
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
        <Col md={12}>
          <TableComponent loading={loading} data={data} heading={heading} />
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
