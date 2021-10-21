import React from "react";
import classes from "./index.module.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Button } from "@mui/material";
import { authHeader } from "../../../services/auth_service";
import { useParams ,useHistory} from "react-router-dom";

const API_URL = "http://localhost:3001";
const PrintPage = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  let history = useHistory();
  

  React.useEffect(() => {
    axios
      .get(API_URL + "/600/transactions/" + id, {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
      });
  }, [id]);

  return (
    <Container fluid>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className={classes.Section}>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h4>Subsidy Payment Details</h4>
              </div>
            </Col>
            <Col md={12}>
              <Row style={{ marginTop: "50px" }}>
                <Col md={8} className="text-center" style={{ padding: "15px" }}>
                  <table className={classes.table}>
                    <tr>
                      <td>Reference Number</td>

                      <td>{data.reference}</td>
                    </tr>
                    <tr>
                      <td>Beneficiary Name</td>

                      <td>13GHTNU3839390</td>
                    </tr>
                    <tr>
                      <td>Date Applied</td>

                      <td>{data.createdDate}</td>
                    </tr>

                    <tr>
                      <td>Amount Applied</td>

                      <td>$8900000</td>
                    </tr>
                    <tr>
                      <td>Amount Approved</td>

                      <td>$8900000</td>
                    </tr>
                    <tr>
                      <td>Receiving Paying Agency (RPA)</td>

                      <td>$8900000</td>
                    </tr>
                    <tr>
                      <td>Approved Office</td>

                      <td>$7000000</td>
                    </tr>
                    <tr>
                      <td>Proccesed Date</td>

                      <td>{data.processDate}</td>
                    </tr>
                  </table>
                </Col>
                <Col md={4}>
                  <table className={classes.table2} >
                    <tr>
                      <td>Subsidy Type</td>
                      <td>seeding Subsidy</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{data.status}</td>
                    </tr>
                  </table>
                </Col>

                <Col md={12}>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ float: "left", color: "red" }}
                    onClick={()=> history.goBack()}
                  >
                    {"<<<"} Return
                  </Button>
                  <Button variant="contained" sx={{ float: "right" }} onClick={()=>window.print()}>
                    Print this page
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};
export default PrintPage;
