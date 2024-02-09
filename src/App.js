import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import Moviepage from "./component/Film site/Moviepage";

function App() {
  return (
    <div className="App">
      <div className="App w-full flex  bg-gray-100 ">
        <Routes>
          <Route exact path="/" element={<Moviepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
