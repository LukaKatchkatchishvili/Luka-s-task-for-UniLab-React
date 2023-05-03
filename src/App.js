import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logined from "./Pages/Logined";
import GetStart from "./Pages/GetStart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logined />}></Route>
          <Route path="/registration" element={<GetStart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
