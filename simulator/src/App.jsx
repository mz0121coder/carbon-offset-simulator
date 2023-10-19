import React, { useState, useEffect } from 'react';
import logo from './assets/mz-tech-logo.png';
import SimInputs from './components/SimInputs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loggedInState, defaultEmissions } from './utils/atoms.js';
import axios from 'axios';
import cheerio from 'cheerio';

const App = () => {
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
	const [showModal, setShowModal] = useState(false);
	const emissions = useRecoilValue(defaultEmissions);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'https://www.worldometers.info/co2-emissions/co2-emissions-per-capita/'
			);
			return cheerio.load(result.data);
		};
		// Dynamically scrape CO2 emmissions data for all countries
		const scrapeData = async () => {
			const $ = await fetchData();
			const tableRows = $('table#example2 tbody tr');
			const emissionsData = [];
			tableRows.each((index, element) => {
				const country = $(element).find('td:nth-child(2)').text().trim();
				const emissionsPerCapita = $(element)
					.find('td:nth-child(3)')
					.text()
					.trim();
				emissionsData.push({ country, emissionsPerCapita });
			});
			return emissionsData;
		};
		// Update the default values if they are different
		scrapeData()
			.then(data => {
				if (JSON.stringify(emissions) !== JSON.stringify(data)) {
					setEmissions(data);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className='flex flex-col items-center leading-loose gap-4'>
			{!loggedIn ? (
				<>
					<img src={logo} alt='MZ tech logo' className='w-64 h-64' />
					<h1 className='text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>
						Carbon Offset Simulator
					</h1>
					<p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl'>
						Login or sign up to get started
					</p>
					<button
						className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
						onClick={() => setLoggedIn(true)}>
						Get started
					</button>
				</>
			) : (
				<>
					<div className='flex justify-around items-center gap-2'>
						<h1 className='mt-[1.5vw] text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>
							Carbon Offset Simulator
						</h1>
						<button
							className='mt-[1.5vw] px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
							onClick={() => setShowModal(true)}>
							Logout
						</button>
					</div>
					{showModal && (
						<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
							<div className='bg-white p-4 rounded'>
								<p className='text-lg'>Are you sure you want to logout?</p>
								<div className='flex justify-end mt-4'>
									<button
										className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2'
										onClick={() => {
											setLoggedIn(false);
											setShowModal(false);
										}}>
										Yes
									</button>
									<button
										className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
										onClick={() => setShowModal(false)}>
										No
									</button>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default App;
