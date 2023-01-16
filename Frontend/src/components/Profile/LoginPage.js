import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';

// The login page is just a frame for the Login and SignUp components
const LoginPage = () => {
  return (
      <table className='login-table'>
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
  );
}

export default LoginPage