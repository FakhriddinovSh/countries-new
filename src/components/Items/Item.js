import { NavLink } from 'react-router-dom';
import { Language } from '../../Languages/Languages';

const eachItems = ({ image, title, population, region, capital, lang }) => {
	console.log(lang);
	return (
		<li className="card-list-item col-12">
			<NavLink to={'/country/' + title} className="text-decoration-none">
				<img
					src={image}
					width="264"
					height="160"
					alt="Germany flag"
				></img>
				<div className="card-subbox">
					<h2 className="card-title">{title}</h2>
					<p className="card-desc">
						<strong>{Language[lang].cards.population}:</strong>{' '}
						{population}
					</p>
					<p className="card-desc">
						<strong>{Language[lang].cards.region}:</strong> {region}
					</p>
					<p className="card-desc">
						<strong>{Language[lang].cards.capital}:</strong>{' '}
						{capital}
					</p>
				</div>
			</NavLink>
		</li>
	);
};

export default eachItems;
