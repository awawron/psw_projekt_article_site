import React from 'react';
import { createContext, useState } from 'react';
import { Input, checkEmpty } from './Functions.js';

const ErrorContext = createContext([]);

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const defaultErrors = ['Username too short', 'Password too short'];
  const [error, setError] = useState(defaultErrors);

  function handleLogin(username, password) {
    // TODO
    // Handle login request
  }

  const canLogin = error.length === 0;

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <h1>Login</h1>
      <Input
        label={'Username'}
        value={username}
        onchangeFunc={setUsername}
        errorFunc={checkEmpty}
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
          handleLogin(username, password);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setUsername('');
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
