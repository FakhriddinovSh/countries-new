import { Language } from '../../Languages/Languages';
import '../Form/form.css';

const SearchForm = ({ setData, setSelect, lang }) => {
	console.log(lang);
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
							placeholder={Language[lang].header.placeholder}
							name="input-search"
						></input>
					</label>

					<div className="select-box">
						<select
							defaultValue=""
							className="form-select"
							onChange={(evt) => setSelect(evt.target.value)}
						>
							<option
								className="form-select-option"
								selected
								hidden
							>
								{Language[lang].header.filterOne}
							</option>
							<option
								value="africa"
								className="form-select-option"
							>
								{Language[lang].header.africa}
							</option>
							<option
								value="america"
								className="form-select-option"
							>
								{Language[lang].header.america}
							</option>
							<option value="asia" className="form-select-option">
								{Language[lang].header.asia}
							</option>
							<option
								value="europe"
								className="form-select-option"
							>
								{Language[lang].header.europe}
							</option>
							<option
								value="oceania"
								className="form-select-option"
							>
								{Language[lang].header.oceania}
							</option>
						</select>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SearchForm;
