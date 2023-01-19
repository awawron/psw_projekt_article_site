import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import Navbar from '../Main/Navbar';

// The login page is just a frame for the Login and SignUp components
const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className='page'>
        <table className='login-table page'>
          <tbody className='login-tbody'>
            <tr className='login-tr'>
              <th className='login-th'>
                <Login />
              </th>
              <th className='login-th'>
                <SignUp />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoginPage