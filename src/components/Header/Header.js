import '../Header/header.css';

const Header = ({ theme, setTheme }) => {
	return (
		<header>
			<div className="header">
				<div className="header-box container">
					<a href="./index.html">Where in the world?</a>

					<select
						defaultValue={theme}
						onChange={(e) => setTheme(e.target.value)}
						className="header-mode"
					>
						<option value="light">Light Mode</option>
						<option value="dark">Dark Mode</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
