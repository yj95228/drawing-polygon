import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DrawContainer from './components/DrawContainer.js';
import MakePolygon from './components/MakePolygon.js';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MakePolygon />} />
				<Route path='draw' element={<DrawContainer />} />
			</Routes>
		</BrowserRouter>
	);
}
