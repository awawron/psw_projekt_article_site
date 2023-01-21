import React from 'react';
import { createContext, useState, useContext } from 'react';
import { checkEmpty, checkEmail } from './Functions.js';

// This context contains errors for all the inputs
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
    window.alert("Your data is being processed by our employees. This process may take up to 99999999 days. Thank you for your patience!")
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

function Input({ label, type, value, onchangeFunc, errorFunc }) {
  const { error, setError } = useContext(ErrorContext);

  return (
    <label>
      {label}
      {': '}
      <input
        type={type}
        required
        value={value}
        onChange={(e) => {
          onchangeFunc(e.target.value);
          setError(errorFunc(e.target.value, label, error));
        }}
      ></input>
    </label>
  );
}
