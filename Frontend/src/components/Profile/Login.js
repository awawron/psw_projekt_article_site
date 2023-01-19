import React from 'react';
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { checkEmpty } from './Functions.js';
import axios from "axios"

// This context contains errors for all the inputs
export const ErrorContext = createContext([]);

export function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const defaultErrors = ['Username too short', 'Password too short'];
  const [error, setError] = useState(defaultErrors);

  const handleLogin = async (username, password) => {
    axios.post("/login", { username, password })
      .then(res => {
        if(res.data.message === 'Login successful') {
          navigate('/')
        }
        else {
          window.alert(res.data.message)
        }
      })
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
