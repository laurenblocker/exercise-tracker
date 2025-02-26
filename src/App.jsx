import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import FlexibilityExercise from "./components/FlexibilityExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Jump Rope", type: "duration" },
    { name: "Stretching", type: "flexibility" },
  ];

  return (
    <div>
      {!selectedExercise ? (
        <div>
          <h1>Exercise Menu</h1>
          {exercises.map((exercise) => (
            <button key={exercise.name} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h1>{selectedExercise.name}</h1>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <FlexibilityExercise name={selectedExercise.name} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
