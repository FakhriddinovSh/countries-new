import '../Card/card.css';
import Items from '../Items/Item';
import { useState, useEffect } from 'react';
import SearchForm from '../Form/Form123';

const Cards = () => {
	const [data, setData] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [value, setValue] = useState('');
	const [select, setSelect] = useState('');

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => {
					setData({
						isLoading: false,
						data: data,
						isError: false,
					});
				})
				.catch(() => setData([]));
		} else if (select.length) {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
				.then((res) => res.json())
				.then((data) => {
					setData({
						isLoading: false,
						data: data,
						isError: false,
					});
				});
		} else {
			fetch('https://restcountries.com/v3.1/all')
				.then((res) => res.json())
				.then((data) => {
					setData({
						isLoading: false,
						data: data,
						isError: false,
					});
				});
		}
	}, [value, select]);

	return (
		<section>
			<SearchForm setData={setValue} setSelect={setSelect} />
			<div className="container">
				{data.isLoading && <h2>Loading...</h2>}
				{data.isError && <h2>Error...</h2>}
				{data.data.length !== 0 && (
					<ul className="card-list row">
						{data.data.map((item) => (
							<Items
								image={item.flags?.svg}
								title={item.name?.common}
								population={item.population}
								region={item.region}
								capital={item.capital?.[0]}
							/>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default Cards;
