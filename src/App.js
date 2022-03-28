import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapContainer from "./components/MapContainer.js";
import MarkerContainer from "./components/MarkerContainer.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapContainer />} />
        <Route path="marker" element={<MarkerContainer />} />
      </Routes>
    </BrowserRouter>
  );
}