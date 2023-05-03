import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logined from "./Pages/Logined";
import GetStart from "./Pages/GetStart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/logined" element={<Logined />}></Route>
          <Route path="/" element={<GetStart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
