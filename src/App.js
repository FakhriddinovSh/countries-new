import Header from './components/Header/Header';
// import Form from './components/Form/Form123';
import Card from './components/Card/Card';
import { Route, Routes } from 'react-router-dom';
import { SinglePage } from './Pages/SinglePage/SinglePage';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Card />} />
				<Route path="/country/:name" element={<SinglePage />} />
			</Routes>
			{/* <Card /> */}
		</div>
	);
}

export default App;
