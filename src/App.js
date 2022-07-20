import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./component/Form";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-song" element={<Form />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
