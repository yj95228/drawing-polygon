import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawContainer from "./components/DrawContainer.js";
import ClickPolygon from "./components/ClickPolygon.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClickPolygon />} />
        <Route path='draw' element={<DrawContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
