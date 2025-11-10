import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DrMario from "./components/DrMario";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drmario" element={<DrMario />} />
      </Routes>
    </BrowserRouter>
  );
}
