import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Typography,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  TextField,

  Stack,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  FormHelperText,
  Paper
} from "@mui/material";
import classes from "./index.module.scss";
import { generateNumber } from '../../../shared/utility'
import axios from "axios";
import { authHeader } from "../../../services/auth_service";
import { useHistory } from "react-router";
import Spinner from "../../../components/Spinner";
import Success from "../Success";
import { Prompt } from 'react-router'
import { motion } from "framer-motion";
import { useAppSelector } from "../../../store/store";
import { SubType } from '../../../interfaces';


const API_URL = "http://localhost:3001";

const Application = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = React.useState<SubType[] | null>([]);
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = useState(false);
  const [iserror, setIserror] = useState(false)
  const [open1, setOpen1] = useState(false);
  const [change, setChange] = useState(false)
  let history = useHistory()
  var fullName = user!.firstName + ' ' + user!.lastName
  const [values, setValues] = React.useState({
    reference: generateNumber(15),
    email: user!.email!,
    amt_2: 0,
    amt_3: 0,
    amt_1: 0,
    phone: user!.phone,
    city: user!.city,
    name: fullName,
    code: user!.postCode,
    subsidyPercentage: 0,
    subTypeId: '',

  });


  const handleSubmit = () => {
    if (values.amt_1 === 0 || values.subTypeId === '') {
      setIserror(true)
    } else {
      setLoading(true)
      axios.post(API_URL + '/subsidy', values, {
        headers: authHeader(),
      }).then((res) => {
        setLoading(false)
        setOpen1(true)
        setChange(true)

      }).catch((err) => {
        setOpen(true)
      })
    }
  };



  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/customer">
      Dashboard
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/customer/wallet">
      Subsidy
    </Link>,
    <Typography key="3" color="text.primary">
      New Application
    </Typography>,
  ];
  React.useEffect(() => {
    axios
      .get(API_URL + "/subsidyType", {
        headers: authHeader(),
      })
      .then((res) => {
        setData(res.data);
      });

  }, []);
  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onCal = (number: string) => {
    var percentToGet = 50
    var percent = (percentToGet / 100) * parseInt(number);
    var estimated = parseInt(number) - percent
    setValues({
      ...values,
      amt_1: parseInt(number),
      amt_2: percent,
      amt_3: estimated,
      subsidyPercentage: percentToGet
    });

  }
  const handleClose = () => {
    setOpen(false);
    setOpen1(false)
  };









  return (
    <>
      <Prompt
        when={true}
        message="Are you sure you want to leave?"
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "fit-content" }}
        >
          Invalid Input entered
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open1}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "fit-content" }}
        >
          Successfully created
        </Alert>
      </Snackbar>
      {loading ? (
        <Spinner title={"Wait a moment"} />

      ) : (
        <>
          {change ? <Success reference={values.reference} />
            :
            <Container fluid style={{ backgroundColor: '#2f5561', height: '100vh' }}>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}

              >
                <Row>
                  <Col md={1}></Col>
                  <Col md={10} >
                    <Paper elevation={4} className={classes.Section}>




                      <Row>
                        <Col md={12}>
                          <Breadcrumbs
                            separator={<ArrowForwardIos fontSize="small" />}
                            aria-label="breadcrumb"
                          >
                            {breadcrumbs}
                          </Breadcrumbs>
                        </Col>
                      </Row>

                      <Row style={{ marginTop: "20px", padding: '20px' }}>

                        <Stack spacing={3}>
                          <Row>
                            <Col md={6}>
                              <FormControl fullWidth>
                                <TextField

                                  value={values.reference}
                                  label="Reference Number"
                                  variant="filled"
                                  disabled

                                />
                              </FormControl>
                            </Col>
                            <Col md={6}></Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <FormControl fullWidth>
                                <TextField
                                  value={fullName}
                                  label="Beneficiary Name"
                                  variant="standard"
                                  disabled
                                  onChange={handleChange('name')}
                                />
                              </FormControl>
                            </Col>
                            <Col md={5}></Col>
                          </Row>

                          <Row style={{ paddingTop: "20px" }}>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                              <Col md={6}>
                                <FormControl fullWidth>
                                  <TextField
                                    defaultValue={values.email}
                                    label="Email Address"
                                    variant="standard"
                                    disabled

                                  />
                                </FormControl>
                              </Col>
                              <Col md={6}>

                                <FormControl fullWidth>
                                  <TextField
                                    value={values.phone}
                                    label="Phone Number"
                                    variant="standard"
                                    disabled

                                  />
                                </FormControl>
                              </Col>
                            </Stack>
                          </Row>

                          <Row>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                              <Col md={6}>
                                <FormControl fullWidth>
                                  <TextField
                                    value={values.city}
                                    label="Town/City"
                                    variant="filled"
                                    disabled

                                  />
                                </FormControl>
                              </Col>
                              <Col md={6}>

                                <FormControl fullWidth>
                                  <TextField
                                    value={values.code}
                                    label="Postal Code"
                                    variant="filled"
                                    disabled

                                  />
                                </FormControl>
                              </Col>
                            </Stack>
                          </Row>

                          <Row>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                              <Col md={6}>
                                <FormControl fullWidth>
                                  <TextField

                                    required
                                    value={values.amt_1}
                                    label="Application Amount"
                                    variant="standard"
                                    type="number"
                                    onChange={(e) => onCal(e.target.value)}
                                    error={iserror}
                                    helperText={iserror ? "must not be empty" : null}

                                  />
                                </FormControl>
                              </Col>
                              <Col md={6}>

                                <FormControl variant="standard" fullWidth error={iserror} required>
                                  <InputLabel id="demo-simple-select-helper-label">
                                    Select Purpose
                                  </InputLabel>
                                  <Select

                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={values.subTypeId}
                                    label="Purpose"
                                    onChange={(e) => setValues({
                                      ...values,
                                      subTypeId: e.target.value
                                    })
                                    }

                                  >
                                    <MenuItem >None</MenuItem>
                                    {data?.map((dat) =>

                                      <MenuItem key={dat.id} value={dat.id}>{dat.name}</MenuItem>

                                    )}

                                  </Select>
                                  {iserror ? <FormHelperText>you must select something</FormHelperText> : null}
                                </FormControl>
                              </Col>
                            </Stack>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <FormControl fullWidth>
                                <TextField
                                  disabled
                                  value={values.amt_2}
                                  label="Estimated Deposit"
                                  variant="filled"

                                />
                              </FormControl>
                            </Col>
                            <Col md={6}></Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <FormControl fullWidth>
                                <TextField
                                  disabled
                                  value={values.amt_3}
                                  label="Estimated Subsidy Amount"
                                  variant="standard"

                                />
                              </FormControl>
                            </Col>

                            <Col md={6}></Col>
                          </Row>
                        </Stack>

                        <Col md={12} style={{ paddingTop: "30px" }}>
                          <Button variant="danger" onClick={() => history.goBack()}>
                            Return
                          </Button>
                          <Button
                            variant="primary"

                            style={{
                              float: "right",

                            }}
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Paper>
                  </Col>

                  <Col md={1}>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          }
        </>)}

    </>


  )


}


export default Application