import '../Header/header.css';
// import { useState } from 'react';
import { Language } from '../../Languages/Languages';

const Header = ({ theme, setTheme, lang, setLanguage }) => {
	return (
		<header>
			<div className="header">
				<div className="header-box container">
					<a href="/">{Language[lang].header.logo}</a>
					<div>
						<select
							defaultValue={theme}
							onChange={(e) => setTheme(e.target.value)}
							className="header-mode me-4"
						>
							<option value="light">
								{Language[lang].header.light}
							</option>
							<option value="dark">
								{Language[lang].header.dark}
							</option>
						</select>
						<select
							defaultValue={lang}
							onChange={(e) => setLanguage(e.target.value)}
						>
							<option value="en">en</option>
							<option value="uz">uz</option>
							<option value="ru">ru</option>
						</select>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
