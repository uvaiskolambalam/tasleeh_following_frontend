import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useDispatch, useSelector } from "react-redux";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form as Forms, useFormik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';


import SERVER_URL from '../../utils/axios';

export default function FormDialog() {
  // const company = useSelector((state) => state.company);
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyData, setCompanyData] = useState({});
  const [open, setOpen] = useState(false);

  const initialValue = {
    companyName: '',
    email: '',
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: initialValue,
    validationSchema: checkoutSchema,
    
    onSubmit: async (values, { resetForm }) => {
      console.log("value",values);
      const response = await SERVER_URL.post('/companies/companies', values);
      
      resetForm()
      setOpen(false)
      handleClose();
    },
  });
  useEffect(() => {
   handleClose()
 })
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Company</DialogTitle>
      <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>Add Your Company Details</DialogContentText>
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Sl No"
              type="number"
              halfwidth
              // helperText="Full width!"
              variant="standard"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.SlNo}
              name="id"
              error={!!touched.id && !!errors.id}
              helperText={touched.id && errors.id}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Company Name"
              type="text"
              fullWidth
              variant="standard"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.companyName}
              name="companyName"
              error={!!touched.companyName && !!errors.companyName}
              helperText={touched.companyName && errors.companyName}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
      </form>
        </Dialog>
    </Box>
  );
}

const checkoutSchema = yup.object().shape({
  companyName: yup.string().required('Comapny Name is required'),
  email: yup.string().email('Invalid email address').required('email is required'),
});