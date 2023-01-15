import React from 'react';
import { createContext, useState } from 'react';
import { Input, checkEmpty, checkEmail } from './Functions.js';

export const ErrorContext = createContext([]);

export function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const defaultErrors = [
    'Username too short',
    'Email incorrect',
    'Password too short',
  ];
  const [error, setError] = useState(defaultErrors);

  function handleSignup() {
    // TODO
    // Handle signup
  }

  const canLogin = error.length === 0;

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <h1>Register</h1>
      <Input
        label={'Username'}
        value={username}
        onchangeFunc={setUsername}
        errorFunc={checkEmpty}
      />
      <br />
      <Input
        label={'Email'}
        value={email}
        onchangeFunc={setEmail}
        errorFunc={checkEmail}
      />
      <br />
      <Input
        label={'Password'}
        value={password}
        onchangeFunc={setPassword}
        errorFunc={checkEmpty}
      />
      <br />
      <button
        disabled={!canLogin}
        onClick={() => {
          handleSignup(username, email, password);
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          setUsername('');
          setEmail('');
          setPassword('');
          setError(defaultErrors);
        }}
      >
        Reset
      </button>
      <ul>
        {error.map((err, i) => {
          return <li key={i}>{err}</li>;
        })}
      </ul>
    </ErrorContext.Provider>
  );
}

