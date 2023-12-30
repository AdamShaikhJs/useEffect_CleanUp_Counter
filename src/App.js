import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      // Clean up timer interval when component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>UseEffect Fundamental!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h4>Timer : {timer}</h4>
    </div>
  );
}
