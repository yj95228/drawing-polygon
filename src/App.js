import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClickPolygon from './container/click';
import DrawContainer from './container/input';

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
