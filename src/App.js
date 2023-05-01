import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Logined from "./Components/Logined";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/logined" element={<Logined />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
