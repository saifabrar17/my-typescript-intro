import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      {/* <DataFetch status="loading" ></DataFetch> */}

      {/* <Button>Click</Button> */}

      <Post></Post>
    </div>
  );
}

export default App;
