import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Typography,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem
} from "@mui/material";
import classes from "./index.module.css";
import {generateNumber} from '../../../shared/utility'
import { useSelector,shallowEqual } from "react-redux";
import axios from "axios";
import { authHeader } from "../../../services/auth_service";
import { useHistory } from "react-router";

const API_URL = "http://localhost:3001";

const Application=()=>{
    const { user } = useSelector((state) => state.auth, shallowEqual);
    const [data, setData] = React.useState([]);
    let history=useHistory()
    var fullName= user.firstName + ' '+user.lastName
    const [values, setValues] = React.useState({
        reference:generateNumber(15),
        email: user.email,
        amt_2:0,
    amt_3:0,
    amt_1:0,
    phone:user.phone,
    city:user.city,
    name:fullName,
    code:user.postCode,
subsidyPercentage:null,
subTypeId:0,

      });

      

   
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
const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    const onCal=(number)=>{
     var percentToGet=50
    var percent = (percentToGet / 100) * number;
var estimated= number - percent
setValues({
    ...values,
    amt_1: number,
    amt_2:percent,
    amt_3:estimated,
    subsidyPercentage:percentToGet
  });
        
    }
    

console.log(values)

    return(
<>
<Container fluid>
      <Row>
        <Col md={1}></Col>
        <Col md={10} className={classes.Section}>
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
          
          <Row style={{ marginTop: "20px",padding:'20px' }}>
        
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

              <Row style={{ paddingTop:"20px" }}>
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
                      value={values.amt_1}
                      label="Application Amount"
                      variant="standard"
                      type="number"
                      onChange={(e)=>onCal(e.target.value)}
                    />
                  </FormControl>
              </Col>
              <Col md={6}>
                
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                     Select Purpose
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={values.subTypeId}
                      label="Purpose"
                      onChange={(e)=>setValues({
                        ...values,
                        subTypeId:e.target.value
                      })
                    }
                    >
                      
                      {data.map((dat)=>

     <MenuItem key={dat.id} value={dat.id}>{dat.name}</MenuItem>

                      )}
                
                    </Select>
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
              
              <Col md={12} style={{ padding: "30px" }}>
                <Button variant="outlined" color="error" onClick={()=>history.goBack()}>
                  Return
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ float: "right" }}
                >
                  Submit
                </Button>
                </Col>
                </Row>
              </Col>
          
          <Col md={1}>
        </Col>
      </Row>
    </Container>
    
</>


    )


}


export default Application