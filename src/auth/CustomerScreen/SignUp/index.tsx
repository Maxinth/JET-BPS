import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { VisibilityOff, Visibility } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import {
  Grid, TextField, FormControlLabel, Checkbox, InputAdornment,
  InputLabel,
  FormControl,
  FormHelperText,
  IconButton,
  FilledInput,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { CountryDropdown } from 'react-country-region-selector';
import useForm from './useForm'
import PhoneInput from 'react-phone-input-2'
import Spinner from '../../../components/Spinner'
import 'react-phone-input-2/lib/material.css'

import classes from './index.module.scss'




export default function SignUp() {

  const { handleChange, handleClickShowPassword,

    handleSubmit,
    errmessage, error,
    loading,
    open,
    handleClose,
    values,
    handleCheck,
    checked,
    setPhone,
    Country } = useForm()
  const input = {
    width: '100%',
    background: 'rgba(107, 58, 107, 0.1)',
    color: '#9c27b0',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid grey',

  }

  return (<>
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
        Error has Occured
      </Alert>
    </Snackbar>

    {
      loading ? (
        <Spinner title={"Please Wait..."} />
      ) : (


        <Container className={classes.Container}>
          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <motion.div
                  initial={{ x: '150vh' }}
                  animate={{ x: -10 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 110 }}

                >
                  <Box
                    className={classes.Box}
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <Avatar sx={{ m: 1, bgcolor: '#1F3F49' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h3" variant="h5" sx={{ marginBottom: 4 }}>
                      Sign up
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>

                          <TextField
                            label="First Name"
                            variant='filled'
                            required
                            value={values.f_name}
                            onChange={handleChange('f_name')}
                            error={error.f_name}
                            helperText={errmessage.f_name}
                          />
                        </FormControl>

                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            label="Surname"
                            value={values.surname}
                            required
                            variant='filled'
                            onChange={handleChange('surname')}
                            error={error.surname}
                            helperText={errmessage.surname}
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                          <CountryDropdown
                            value={values.country}
                            onChange={
                              (val) => {
                                Country(val)
                              }} />
                        </FormControl>

                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <FormControl fullWidth>
                          <PhoneInput
                            isValid={(value, country) => {
                              if (value.match(/12345/)) {
                                return 'Invalid value number in ' + country;
                              } else if (value.match(/1234/)) {
                                return false;

                              } else {
                                return true
                              }
                            }}
                            country={values.country}
                            placeholder='Phone Number*'
                            inputClass={classes.input}
                            value={values.phone}
                            inputStyle={input}
                            containerClass={classes.phoneContainer}
                            onChange={phone => setPhone(phone)}
                          />


                        </FormControl>

                      </Grid>
                      <Grid item xs={12}>

                        <FormControl fullWidth>
                          <TextField
                            required
                            variant='filled'
                            type='email'
                            label='Email Address'
                            value={values.email}
                            onChange={handleChange('email')}
                            error={error.email}
                            helperText={errmessage.email}
                          />


                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth variant='filled'>
                          <InputLabel>Password</InputLabel>
                          <FilledInput
                            required
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            error={error.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="show password"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <FormHelperText sx={{ color: 'red' }}>{errmessage.password}</FormHelperText>


                        </FormControl>

                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth variant='filled'>
                          <InputLabel>Confirm Password</InputLabel>
                          <FilledInput
                            required
                            error={error.c_password}
                            type="password"
                            value={values.c_password}
                            onChange={handleChange('c_password')}

                          />
                          <FormHelperText sx={{ color: 'red' }}>{errmessage.c_password}</FormHelperText>
                        </FormControl>

                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>

                          <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleCheck} sx={{ color: '#1F3F49' }} />}
                            label={<span>Agree to the <Link to='/'> Term of Use</Link> and <Link to='/customer'>Privacy Policy</Link> </span>}
                          />
                          <FormHelperText sx={{ color: 'red' }}>{errmessage.check}</FormHelperText>
                        </FormControl>

                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                              bgcolor: "#1F3F49",
                              "&:hover": {
                                bgcolor: "#1F3F49",
                              },
                            }}
                          >
                            Register
                          </Button>

                        </FormControl>


                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      Already have an Account? {' '}
                      <NavLink to={`/customer/login`} style={{ textAlign: "center" }}>
                        Click here to Login
                      </NavLink>
                    </Grid>

                  </Box>
                </motion.div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </motion.div>
        </Container>

      )
    }

  </>
  )
}
