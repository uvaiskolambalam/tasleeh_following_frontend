import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import { Formik, Form as Forms, useFormik } from 'formik';
import * as yup from 'yup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SERVER_URL from '../../utils/axios';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Addcompany({
  updateCompanyData,
  handleClose,
  handleOpen,
  open
}) {
  
  
  const [dummy, setDummy] = useState(1)
  const intialValues = { email: "", companyName: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = () => {
    console.log(formValues,'datassdfjasldfjo');
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // console.log(formValues,'formVlues');
  const validate = (values) => {
    console.log(values,'final erro');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    console.log(formValues, 'today data');
    updateCompanyData(formValues)
    // handleClose()
    // const response = await SERVER_URL.post('/companies/companies', formValues)
    // console.log(response.data,'response.data');
    // if (response.data.newCompany != true) {
      
    //   handleClose()
    // } else {
    //   console.log('hhhh');
    // }

    setDummy(0)
  };
  
  useEffect(() => {
    // if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    // }
  },[dummy]);

  return (
    <div>
      <Button onClick={handleOpen}>ADD</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={handleSubmit}noValidate>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        {/* <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment
              position="start"
              
            >
              <AccountCircle />
            </InputAdornment>
          }
                /> */}
                
      </FormControl>
      <TextField
         type="companyName"
         name="companyName"
         id="companyName"
         value={formValues.companyName}
         onChange={handleChange}
        //  className={formErrors.email && "input-error"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        // variant="standard"
              />
              <TextField
        type="email"
        name="email"
        id="email"
        value={formValues.email}
        onChange={handleChange}
        // className={formErrors.email && "input-error"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        // variant="standard"
      />
      {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
        {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
        {/* <TextField id="input-with-sx" label="With sx" variant="standard" /> */}
      {/* </Box> */}
              </Box>
            
            <Button onClick={handleClose}>Close</Button>
            <Button type='submit'>Submit</Button>
          </Typography>
              </form>
        </Box>
      </Modal>
    </div>
  );
}

// const checkoutSchema = yup.object().shape({
//   companyName: yup.string().required('Comapny Name is required'),
//   email: yup.string().email('Invalid email address').required('email is required'),
// });