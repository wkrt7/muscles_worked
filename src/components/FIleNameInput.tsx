import React, { useEffect, useState } from "react";
import exercicesMap from "../../public/exercicesMap.json";

export const loadExercises = (): { [key: string]: string } => {
  return exercicesMap;
};

interface FileNameInputProps {
  fileName: string;
  onFileNameChange: (newFileName: string) => void;
}

const FileNameInput: React.FC<FileNameInputProps> = ({
  fileName,
  onFileNameChange,
}) => {
  const [exercises, setExercises] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const exercises = loadExercises();
    setExercises(exercises);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFileNameChange(event.target.value);
  };

  return (
    <select value={fileName} onChange={handleSelectChange}>
      <option value="" disabled>
        Select exercise
      </option>
      {Object.keys(exercises).map((key) => (
        <option key={key} value={exercises[key]}>
          {key}
        </option>
      ))}
    </select>
  );
};

export default FileNameInput;
