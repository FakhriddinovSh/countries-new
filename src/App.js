import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Route, Routes } from 'react-router-dom';
import { SinglePage } from './Pages/SinglePage/SinglePage';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'light',
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<div className={theme} id="allWrapper">
			<Header theme={theme} setTheme={setTheme} />
			<Routes>
				<Route path="/" element={<Card />} />
				<Route
					path="/country/:name"
					element={<SinglePage theme={theme} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
