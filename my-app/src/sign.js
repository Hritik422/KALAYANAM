import React from 'react';
import './style.css'; 
import Nav from  "./Navbar"
const LoginForm = () => {
  return (
    <div><Nav />
    <div className='sign-up-page'>
    <div className='bg-2'></div>
    <div>
    <form>
    <div className='sign-up'>
      <div><input type='text' placeholder='Username'></input></div>
      <div><input type='email' placeholder='Enter your email'></input></div>
      <div><input type='password' placeholder='Enter your password '></input></div>
      <div><input type='password' placeholder='Confirm '></input></div>
      <div><input type='submit' className='submit1'></input></div>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
