import React, { useState } from 'react';
import {
  FormControl,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
  Button, Alert,
} from '@mui/material';
import { useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff, PersonAdd } from '@mui/icons-material';
import styles from './register.module.scss';
import passwordValidator from '../../Util/password-validator';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState(null);
  let navigate = useNavigate(); 
  function redirectLogin()
  { 
    let path = '/login'; 
    navigate(path);
  }

  async function register(user) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch("/register", requestOptions).then(
        (response) => response.json()).then((json)=> {
          if(json.success===true)
          {
            console.log("New User registered successfully")
          }
          else
          {
            // Email already exists in  database. So redirect to login page
            redirectLogin()
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
      <div className={styles.registerBox}>
        <div>
          <PersonAdd sx={{ height: '3rem', width: 'auto', color: '#787878' }} />
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
          <InputLabel htmlFor="standard-adornment-uid">University Id</InputLabel>
          <Input
            id="standard-adornment-uid"
            type="text"
            value={uid}
            onChange={(e) => {
              setUid(e.target.value);
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
        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                  )}
          />
        </FormControl>
        <div className={styles.registerBox__controls}>
          <Button variant="contained" size="small" type="submit"
          onClick={()=>{
            register({
              'email':email,
              'password_hash':password,
              'university_id':uid
            })
          }}
          >
            Register
          </Button>
        </div>
        {alerts}
      </div>
    </form>
  );
}
