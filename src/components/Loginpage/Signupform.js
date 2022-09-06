import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Input,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";



  //   ********************************** Styled ***************************************************
const paperStyle = {
  padding: 20,
  width: 300,
  margin: "20px auto",
};
const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
const linkstyle = { color: "#1976d2" };

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


  //   ********************************** Main Function***************************************************
const Signupform = () => {


  //   ********************************** Form Validations Using Formik ***************************************************
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
      action.resetForm();
    },
  });
console.log(
  "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  errors
);

  //   ********************************** Return HTML Page ***************************************************
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              placeholder="Enter First Name"
              type="text"
              autoComplete="off"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              
              <Typography color="error" variant="caption">{errors.firstName}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              placeholder="Enter Last Name"
              type="text"
              autoComplete="off"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? (
              <Typography color="error" variant="caption">{errors.lastName}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
            fullWidth 
              label="Email"
              placeholder="Enter Email"
              type="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Typography color="error" variant="caption">{errors.email}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Input 
            fullWidth 
            name="password" 
            type="password"
            placeholder="Enter Password"
            autoComplete="on"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            {errors.password && touched.password ? (
              <Typography color="error" variant="caption">{errors.password}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Input 
            fullWidth 
            name="confirmPassword" 
            type="password"
            placeholder="Enter Password"
            autoComplete="on"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Typography color="error" variant="caption">{errors.confirmPassword}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button className="input-button" type="submit" variant="contained" style={btnstyle} fullWidth>
          Sign Up
        </Button>
        <Typography style={{paddingBottom:'30px'}}>
          Do you have an account ?
          <Link href="/loginform" style={linkstyle}>
            Signin Page
          </Link>
        </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signupform;
