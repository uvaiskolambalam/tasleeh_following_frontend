import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from "antd";
import './LoginForm.css'
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SERVER_URL from '../../../utils/axios';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const valueRef = useRef('')
  // const [userName, setUserName] = useState('')
  // const [password,setPassword]=useState('')
  const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
  
  // const handleClick = async (a, b, c, d) => {
  //   console.log(userName,'user value');
    // a.preventDefault()
    // return console.log(valueRef.current,a,'user valiue')
    // navigate('/dashboard');
  // };




  const onFinish = async (loginData) => {
    try {
      console.log(loginData,'loginData');
      const response=await SERVER_URL.post('/login',loginData)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form onFinish={onFinish}>
      <Form.Item name="email" rules={[
             
          { required: true, type: "email" },
          
            
              ]}>
          <Input
            size='large'
                className="SignupBox-inpiut-field loginInput"
                type="text"
                placeholder="Email"
              />
        </Form.Item>
        
        <Form.Item name="password" rules={[
              {required:true},
              {min: 8}

              ]}>
          <Input
            size='large'
                className="SignupBox-inpiut-field loginInput"
                type="password"
                placeholder="Password"
              />
        </Form.Item>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
        </Stack>
        

        <Form.Item>
        <Button htmlType="submit" type='primary' className='loginButton' block>Login</Button>
        </Form.Item>
        

      </Form>
      {/* <form noValidate> */}






      {/* <Stack spacing={3}>
        <TextField onChange={(e) => {
          e.preventDefault()
          setUserName()
        }} name="email" label="Email address" />
        
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
         
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
        </LoadingButton> */}
        {/* </form> */}
    </>
  );
}
