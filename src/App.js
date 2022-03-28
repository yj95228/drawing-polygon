import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawContainer from "./components/DrawContainer.js";
import MakePolygon from "./components/MakePolygon.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawContainer />} />
        <Route path="make-polygon" element={<MakePolygon />} />
      </Routes>
    </BrowserRouter>
  );
}