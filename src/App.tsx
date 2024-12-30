import { useState } from "react";
import "./App.css";
import ExerciseDisplay from "./components/ExerciseDisplay";
import FileNameInput from "./components/FIleNameInput";
import muscles1 from "./assets/muscles lines eyes.svg"; // Import the SVG file
import MusclesSvg1 from "./components/MusclesSvg1"; // Import the SVG component

function App() {
  const [fileName, setFileName] = useState<string>("Ab_Roller");
  const [primaryMuscles, setPrimaryMuscles] = useState("");

  const handleMuscleChange = (muscle: string) => {
    setPrimaryMuscles(muscle);
  };
  const handleFileNameChange = (newFileName: string) => {
    setFileName(newFileName);
  };

  console.log("App component rendered");
  console.log("fileName:", fileName);
  console.log("primaryMuscles:", primaryMuscles);

  let classname = "path2";
  if (primaryMuscles == "hamstrings") {
    classname = "path1";
  }

  return (
    <div>
      <FileNameInput
        fileName={fileName}
        onFileNameChange={handleFileNameChange}
      />
      <ExerciseDisplay
        fileName={fileName}
        onMuscleChange={handleMuscleChange}
      />
      {/* <img src={muscles1} alt="Muscles Diagram" className="svg-background" /> */}

      <MusclesSvg1 classname={classname} />
    </div>
  );
}
export default App;
