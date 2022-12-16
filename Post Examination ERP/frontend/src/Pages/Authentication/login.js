import React, { useState } from 'react';
import {
  FormControl,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
  Button,Alert
} from '@mui/material';
import { Visibility, VisibilityOff, Person } from '@mui/icons-material';
import styles from './login.module.scss';
import { useNavigate } from "react-router-dom";
import passwordValidator from '../../Util/password-validator';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alerts, setAlerts] = useState(null);

  let navigate = useNavigate(); 
  function redirectDashboard()
  { 
    let path = '/'; 
    navigate(path);
  }
  async function login(user) {
    console.log("IDK")
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    try {
      console.log(user.email)
      console.log(user.password_hash)
      const response = await fetch("/login?"+"email="+user.email+"&password_hash="+user.password_hash, requestOptions).then(
        (response) => response.json()).then((json)=> {
          console.log(json)
          if(json.success===true)
          {
            console.log("User Logged in successfully")
            // Redirect to dashboard
            redirectDashboard()
          }
          else{
            console.log("Email or password is incorrect")
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setAlerts(null);

    const details = passwordValidator.validate(password, { details: true });
    if (Array.isArray(details) && details.length > 0) {
      setAlerts(
        <Alert severity="error" sx={{ maxWidth: '30ch' }}>
          {' '}
          {details[0]?.message}
          {' '}
        </Alert>,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.loginBox}>
        <div className={styles.loginBox__icon}>
          <Person sx={{ height: '3rem', width: 'auto', color: '#787878' }} />
        </div>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            id="standard-adornment-email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                                      )}
          />
        </FormControl>
        <div className={styles.loginBox__controls}>
          <Button variant="contained" size="small" type="submit" onClick={()=>{
            console.log("Login Clicked")
            login({
              'email':email,
              'password_hash':password
              })
          }}>
            Log IN
          </Button>
          
        </div>
        {alerts}
      </div>
      
    </form>
  );
}
