import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path="/jkl" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
