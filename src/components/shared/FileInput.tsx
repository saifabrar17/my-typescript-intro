import React, { ChangeEvent, useState } from "react";

interface Props {
  onFileSelected: (file: File) => void;
}

const MAX_FILE_SIZE = 500 * 1024;

const FileInput: React.FC<Props> = ({ onFileSelected }) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds 200KB limit");
      return;
    }
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      return;
    }
    setError(null);
    onFileSelected(file);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileSelect} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default FileInput;
