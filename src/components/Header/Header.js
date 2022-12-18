import '../Header/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="header">
				<div className="header-box container">
					<a href="./index.html">Where in the world?</a>
					<button type="button" className="header-mode">
						Dark Mode
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
