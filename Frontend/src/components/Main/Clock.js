import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toTimeString());

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3333');

    ws.onmessage = (event) => {
      setTime(event.data);
    };

    return () => ws.close();
  }, []);

  return <div className="clock">{time}</div>;
};

export default Clock;