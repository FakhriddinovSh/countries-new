import '../Form/form.css';
// import Cards from '../Card/Card';

const SearchForm = ({ setData, setSelect }) => {
	// const inputSearchGet = (evt) => {
	// 	if (evt.key === 'Enter') {
	// 		const searchedItem = evt.target.value;
	// 		console.log(searchedItem);
	// 		fetch(`https://restcountries.com/v3.1/name/uzbekistan`)
	// 			.then((res) => res.json())
	// 			.then((data) => console.log(data));
	// 	}
	// };

	return (
		<section>
			<div className="container">
				<div className="form">
					<label className="form-label">
						<input
							onKeyDown={(evt) => {
								if (evt.code === 'Enter') {
									setData(evt.target.value);
									evt.target.value = '';
								}
							}}
							className="form-input"
							type="search"
							placeholder="Search for a country…"
							name="input-search"
						></input>
					</label>

					<div className="select-box">
						<select
							defaultValue=""
							className="form-select"
							onClick={(evt) => setSelect(evt.target.value)}
						>
							<option
								className="form-select-option"
								disabled
								hidden
							>
								Filter by Region
							</option>
							<option
								value="africa"
								className="form-select-option"
							>
								Africa
							</option>
							<option
								value="america"
								className="form-select-option"
							>
								Americas
							</option>
							<option value="asia" className="form-select-option">
								Asia
							</option>
							<option
								value="europe"
								className="form-select-option"
							>
								Europe
							</option>
							<option
								value="oceania"
								className="form-select-option"
							>
								Oceania
							</option>
						</select>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SearchForm;
