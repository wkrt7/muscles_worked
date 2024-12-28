import React, { useEffect, useState } from "react";
import { Exercise } from "../types/Exercise";

interface ExerciseDisplayProps {
  fileName: string;
}

const ExerciseDisplay: React.FC<ExerciseDisplayProps> = ({ fileName }) => {
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    fetch(`/exercices/${fileName}`)
      .then((response) => response.json())
      .then((data) => setExercise(data))
      .catch((error) => {
        setExercise(null);
        console.error("Error fetching the exercise daafsdta:", error);
      });
  }, [fileName]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{fileName}</h1>
      <p>Force: {exercise.force}</p>
      <p>Level: {exercise.level}</p>
      <p>Mechanic: {exercise.mechanic}</p>
      {/* <p>Equipment: {exercise.equipment}</p> */}
      <h2>Primary Muscles</h2>
      <ul>
        {exercise.primaryMuscles.map((muscle, index) => (
          <li key={index}>{muscle}</li>
        ))}
      </ul>
      <h2>Secondary Muscles</h2>
      <ul>
        {exercise.secondaryMuscles.map((muscle, index) => (
          <li key={index}>{muscle}</li>
        ))}
      </ul>
      {/* <h2>Instructions</h2>
      <ol>
        {exercise.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol> */}
      {/* <h2>Images</h2>
      {exercise.images.map((image, index) => (
        <img key={index} src={image} alt={`${exercise.name} ${index}`} />
      ))} */}
    </div>
  );
};

export default ExerciseDisplay;
