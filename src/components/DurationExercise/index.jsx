import { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
      <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
    </div>
  );
}

export default DurationExercise;
