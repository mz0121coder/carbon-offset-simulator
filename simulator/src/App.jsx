import React, { useState, useEffect } from 'react';
import logo from './assets/tree-logo.png';
import SimInputs from './components/SimInputs';
import Summary from './components/Summary';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(
		() => JSON.parse(localStorage.getItem('loggedIn')) || false
	);

	useEffect(() => {
		localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
	}, [loggedIn]);

	const [showModal, setShowModal] = useState(false);

	return !loggedIn ? (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200'>
			<div className='max-w-3xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg'>
				<div className='flex items-center justify-center'>
					<div className='w-24 h-24 p-2 bg-white rounded-full shadow-lg'>
						<img
							src={logo}
							alt='Tree logo'
							className='w-full h-full object-contain'
						/>
					</div>
					<h1 className='ml-4 text-3xl font-bold text-gray-800'>
						Carbon Offset Simulator
					</h1>
				</div>
				<p className='my-8 text-lg text-gray-700'>
					Welcome! This app allows you to select a country for tree planting,
					adjust upfront and annual maintenance costs, as well as annual CO2
					offset (kg) per tree, time for a tree to grow (years) and trees
					planted per month.
				</p>
				<p className='mt-8 mb-2 text-lg text-gray-700'>
					With a benchmark of average emissions per year (metric tons), you are
					given a target to offset, and will be shown a dynamic summary, table
					and charts to help you track your carbon offsets, inflation-adjusted
					costs, and journey to achieve carbon neutrality.
				</p>
				<div className='flex justify-center'>
					<button
						className='mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700'
						onClick={() => setLoggedIn(true)}>
						Get started
					</button>
				</div>
			</div>
		</div>
	) : (
		<div className='flex flex-col items-center leading-loose gap-4'>
			<div className='flex justify-around items-center gap-2'>
				<h1 className='mt-[1.5vw] text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>
					Carbon Offset Simulator
				</h1>
				<button
					className='mt-[1.5vw] px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700'
					onClick={() => setShowModal(true)}>
					Logout
				</button>
			</div>
			{showModal && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded'>
						<p className='text-lg'>Are you sure you want to logout?</p>
						<div className='flex justify-end mt-4 gap-4'>
							<button
								className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2 w-[70px]'
								onClick={() => {
									setLoggedIn(false);
									setShowModal(false);
								}}>
								Yes
							</button>
							<button
								className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 w-[70px]'
								onClick={() => setShowModal(false)}>
								No
							</button>
						</div>
					</div>
				</div>
			)}
			<SimInputs />
			<Summary />
		</div>
	);
};

export default App;
