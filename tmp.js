// structure

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Page Stuff</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
};


// TODO:
//
// NavBar: check cookie for login
// authFunctions: check if the user exists and the password matches
// server: handle http requests
//      
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 