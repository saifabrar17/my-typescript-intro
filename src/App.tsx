import { useState } from "react";
import "./App.css";

import MultiStepForm from "./components/multistepForm/MultiStepForm";
import FileInput from "./components/shared/FileInput";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
  };
  return (
    <div className="py-10 mx-auto container relative">
      <MultiStepForm></MultiStepForm>

      <div>
        <FileInput onFileSelected={handleFileSelected} />
        {selectedFile && <div>Selected file: {selectedFile.name}</div>}
      </div>
    </div>
  );
}

export default App;
