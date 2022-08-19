import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClickPolygon from "./components/click/ClickPolygon.js";
import DrawContainer from "./components/input/DrawContainer.js";

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
