import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import CardSection from "../CardSection";
import { authHeader } from "../../../services/auth_service";
import classes from './index.module.scss'
import { motion } from "framer-motion";
import { useAppSelector } from '../../../store/store';
import TableComponent from "./TableComponent";
import { format } from "date-fns";

const API_URL = "http://localhost:3001";
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
    field: "description",

  },
  {
    title: "Paying Agency",
    field: "type",

  },
  {
    title: "Amount",
    field: "amt",


  },
  {
    title: "Status",
    field: "status",

  },
];
const DashBoard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/transactions?userId=" + user!.id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [user]);







  return (
    <>


      <Row>
        <Col md={12} >

          <CardSection />
        </Col>

        <Col md={12} className={classes.content}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >

            <TableComponent loading={loading} data={data} column={columns} />
          </motion.div>
        </Col>

      </Row>
    </>
  );
};

export default DashBoard;
