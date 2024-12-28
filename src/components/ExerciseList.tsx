import React, { useState, useEffect } from "react";

const ExerciseList: React.FC = () => {
  const [exerciseList, setExerciseList] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/public/exercices/list.json`)
      .then((response) => response.json())
      .then((data) => setExerciseList(data))
      .catch((error) => {
        setExerciseList([]);
        console.error("Error fetching the exercise list:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Exercises</h2>
      <ul>
        {exerciseList.map((exerciseName, index) => (
          <li key={index}>{exerciseName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
