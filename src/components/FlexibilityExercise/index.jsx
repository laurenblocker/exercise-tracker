import { useState } from "react";

function FlexibilityExercise({ name }) {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Stretch Progress: {progress}%</p>
      <button onClick={() => setProgress(progress + 10)}>Increase</button>
      <button onClick={() => setProgress(0)}>Reset</button>
    </div>
  );
}

export default FlexibilityExercise;
