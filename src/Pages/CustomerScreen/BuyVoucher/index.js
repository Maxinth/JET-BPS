import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Typography,
  Breadcrumbs,
  Link,
  Radio,
  Paper,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  Button,
  Stack,
  Skeleton,
  Alert,
  Snackbar,
} from "@mui/material";
import classes from "./index.module.css";

import { useSelector,shallowEqual } from "react-redux";
import {motion} from 'framer-motion'
import axios from "axios";
import { authHeader } from "../../../services/auth_service";
import { useHistory } from "react-router";
import Spinner from "../../../components/Spinner";
import Success from "../Success";
import { Prompt } from 'react-router'


const API_URL = "http://localhost:3001";

const BuyVoucher=()=>{
    const { user } = useSelector((state) => state.auth, shallowEqual);
    const [data, setData] = React.useState([]);
    const [loading,setLoading]=React.useState(false)
    const [open, setOpen] = useState(false);
    
    const [open1, setOpen1] = useState(false);
  
    const [method,setMethod]= useState('pin')
    let history=useHistory()
    const [values, setValues] = React.useState({ 
 pin:null,
 amt:null,
 description:'',
 wallet:''
    });
     
    useEffect(() => {
      axios
        .get(API_URL + "/wallets?userId=" + user.id, {
          headers: authHeader(),
        })
        .then((res) => {
          setData(res.data);
  
        });
     
    }, [user.id])

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      setOpen1(false)
    };


   
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/customer">
          Dashboard
        </Link>,
        
        <Typography key="3" color="text.primary">
          Buy Voucher
        </Typography>,
      ];
    const onChangeRadio=(e)=>{
setMethod(e)
    } 
const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
  
    return(
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
        
<Container fluid style={{ backgroundColor:'#9c27b0',height:'100vh'}}>
<motion.div
              initial={{x:'200vw'}}
              animate={{ x:0}}
              transition={{ delay:0.4,duration:1.5, type:'spring',stiffness:100}}
              
              >
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

          <Row>
            <Col md={4}></Col>
      <Col md={4} style={{ padding: "30px" }}>
          {loading ? (
            <Skeleton variant="rectangular" width={300} height={100} />
          ) : (
            <motion.div
              initial={{y:'55'}}
              animate={{ y:0}}
              transition={{ delay:1.2,type:'spring',stiffness:150}}
              
              >
            <Paper
              elevation={4}
              sx={{ textAlign: "center", height: "160px", padding: "20px",bgcolor:'#9c27b0',
              color:'white'}}
            >
              <Typography variant="h4" component="h4">
              {data.length > 0 ? "$" + data[0].balance : null}
              </Typography>{" "}
              <Typography variant="h6" component="h6">
                Available Balance
              </Typography>
            </Paper>
            </motion.div>
          )}
        </Col>
        <Col md={4}></Col>
</Row>



          
          <Row style={{ marginTop: "20px",padding:'20px' }}>
        <Col md={1}></Col>
        <Col md={10}>
        <Stack spacing={3}>
          <Row>
<Col md={6}>
<Stack spacing={3}>
<Col md={12}>
              <FormControl fullWidth>
                    <TextField
                      value={values.wallet}
                      label="Wallet to Credit (Optional)"
                      variant="filled"
                      onChange={handleChange('wallet')}
                  
                    />
                  </FormControl>
              </Col>
              
          
          
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    required
type='number'
                      value={values.amt}
                      label="Voucher Amount"
                      variant="standard"
                    
                      onChange={handleChange('amt')}
                    />
                  </FormControl>
              </Col>
              <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                    required
                      value={values.description}
                      multiline
                      rows={3}
                      label="Description"
                      variant="filled"
                      onChange={handleChange('description')}
                    />
                  </FormControl>
              </Col>
          

</Stack>

</Col>
<Col md={6}>
  <Stack spacing={3}>
  <Col md={12}>
          <FormControl component="fieldset">
  <FormLabel component="legend">Verification Method</FormLabel>
  <RadioGroup
    value={method}
    onChange={(e)=>onChangeRadio(e.target.value)}
  >
    <FormControlLabel value="pin" control={<Radio />} label="Transaction Pin" />
    <Stack direction={{ row:'row-reverse' }} spacing={4}>
      <FormControlLabel value="otp" control={<Radio />} label=" One Time Password (OTP)" />
    
   {method=== 'otp'
   ?
   
   <motion.div
              initial={{opacity:0}}
              animate={{ opacity:1}}
              transition={{ delay:0.3,duration:0.2, type:'spring',stiffness:100}}
              
              >
   <Button variant="contained" sx={{ float: "right",bgcolor:'#9c27b0',
  '&:hover':{
    bgcolor:'#9c27b0'
  }
  }}>Send OTP</Button>
   </motion.div>
   
   
   :null}
    </Stack>
  </RadioGroup>
</FormControl>
          </Col>
          <Col md={12}>
              <FormControl fullWidth>
                    <TextField
                  required
                      value=''
                      label="Pin/OTP"
                      variant="filled"
                      name="pin"
                      onChange={handleChange('pin')}
                  
                    />
                  </FormControl>
              </Col>
  </Stack>
</Col>

          </Row>
            
      
              
          
              
              <Col md={12} style={{ paddingTop: "30px" }}>
              <motion.div
              initial={{opacity:0}}
              animate={{ opacity:1}}
              transition={{ delay:1.8}}
              
              >
                <Button variant="outlined" color="error" onClick={()=>history.goBack()}>
                  Return
                </Button>
                <Button
                  variant="contained"
                  color="primary"
            
                  onClick=''
                  sx={{ float: "right",bgcolor:'#9c27b0',
  '&:hover':{
    bgcolor:'#9c27b0'
  }
  }}
                >
                  Buy Voucher
                </Button>
                </motion.div>
                </Col>
                </Stack>
                </Col>
                <Col md={1}></Col>
                </Row>
              </Col>
          
          <Col md={1}>
        </Col>
      </Row>
      </motion.div>
    </Container>

    </>)}
    
</>


    )


}


export default BuyVoucher