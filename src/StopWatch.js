import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && !isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    if (!isActive && isPaused) {
      clearInterval(intervalId);
    }
    if (!isActive && !isPaused) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="App">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <p>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        {("0" + ((time / 10) % 100)).slice(-2)}
      </p>
    </div>
  );
}
