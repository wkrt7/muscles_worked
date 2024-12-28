import { useState } from "react";
import "./App.css";
import ExerciseDisplay from "./components/ExerciseDisplay";
import FileNameInput from "./components/FIleNameInput";
import muscles1 from "./assets/muscles_1.svg"; // Import the SVG file
import MusclesSvg from "./components/MusclesSvg"; // Import the SVG component

function App() {
  const [fileName, setFileName] = useState<string>("Ab_Roller");

  const handleFileNameChange = (newFileName: string) => {
    setFileName(newFileName);
  };
  console.log(fileName);

  return (
    <div>
      <FileNameInput
        fileName={fileName}
        onFileNameChange={handleFileNameChange}
      />
      <ExerciseDisplay fileName={fileName} />
      {/* <img src={muscles1} alt="Muscles Diagram" className="svg-background" /> */}
      <MusclesSvg /> {/* Use the SVG component */}
    </div>
  );
}
export default App;
