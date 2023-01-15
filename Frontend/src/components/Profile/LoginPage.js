import React from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';

const LoginPage = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <SignUp />
          </th>
          <th>
            <Login />
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default LoginPage