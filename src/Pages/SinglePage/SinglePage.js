import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BorderCountry } from '../../components/Button/BorderCount';
import './SinglePage.css';
import { Language } from '../../Languages/Languages';

export const SinglePage = ({ theme, lang }) => {
	const { name } = useParams();
	console.log(name);

	const [data, setData] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/name/' + name)
			.then((res) => res.json())
			.then((data) => {
				setData({
					isLoading: false,
					data: data,
					isError: false,
				});
			});
	}, [name]);

	return (
		<div className={theme} id="singleItem">
			<div className="container">
				<NavLink
					className="d-inline-block text-decoration-none fw-bold position-relative back-link"
					id="back"
					style={{
						marginTop: '60px',
						marginBottom: '60px',
						color: 'black',
						paddingLeft: '20px',
					}}
					to="/"
				>
					{Language[lang].single.back}
				</NavLink>
				<div className="d-flex">
					{data.data.map((item) => {
						return (
							<>
								{console.log(
									item.borders?.map((item) =>
										console.log(item),
									),
								)}
								<img
									className="rounded-5 me-5"
									src={item.flags.svg}
									width={560}
									height={401}
									alt="{Country image}"
								/>
								<div className={theme} id="SingleWrap">
									<h2 className="mb-5">{name}</h2>
									<div
										className="d-flex justify-content-between"
										style={{ width: '600px' }}
									>
										<div>
											<p className="fw-bold">
												{Language[lang].single.name}:
												<span className="fw-normal ms-2">
													{item.name.common}
												</span>
											</p>
											<p className="fw-bold">
												{
													Language[lang].single
														.population
												}
												:{' '}
												<span className="fw-normal ms-2">
													{item.population}
												</span>
											</p>
											<p className="fw-bold">
												{Language[lang].single.region}:{' '}
												<span className="fw-normal ms-2">
													{item.region}
												</span>
											</p>
											<p className="fw-bold">
												{
													Language[lang].single
														.subregion
												}
												:{' '}
												<span className="fw-normal ms-2">
													{item.subregion}
												</span>
											</p>
											<p className="fw-bold">
												{Language[lang].single.capital}:{' '}
												<span className="fw-normal ms-2">
													{item.capital}
												</span>
											</p>
										</div>
										<div>
											<p className="fw-bold">
												{Language[lang].single.domain}:
												<span className="fw-normal ms-2">
													{item.tld}
												</span>
											</p>
											<p className="fw-bold">
												{
													Language[lang].single
														.currencies
												}
												:
												<span className="fw-normal ms-2">
													{Object.keys(
														item.currencies,
													)}
												</span>
											</p>
											<p className="fw-bold">
												{
													Language[lang].single
														.languages
												}
												:
												<span className="fw-normal ms-2">
													{Object.values(
														item.languages,
													)}
												</span>
											</p>
										</div>
									</div>

									<p className="fw-bold mt-5">
										{Language[lang].single.borders}:
										<span className="fw-normal ms-2">
											{item.borders
												? item.borders?.map((item) => (
														<BorderCountry
															text={item}
														/>
												  ))
												: 'No borders...'}
										</span>
									</p>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};
