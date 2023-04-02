import React from "react";

type DataFetchProps = {
    status: "loading" | "error" | "success"
}

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "error") {
    return <h2>Error, Fetch Failed</h2>;
  } else if (status === "loading") {
    return <h2>Data Loading</h2>;
  }

  return (
    <div>
      <h2>Fetched Successfully</h2>
    </div>
  );
};

export default DataFetch;
