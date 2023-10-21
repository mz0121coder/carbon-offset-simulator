import React, { useState, useEffect } from 'react';
import logo from './assets/mz-tech-logo.png';
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

	return (
		<div className='flex flex-col items-center leading-loose gap-4'>
			{!loggedIn ? (
				<>
					<img src={logo} alt='MZ tech logo' className='w-64 h-64' />
					<h1 className='text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>
						Carbon Offset Simulator
					</h1>
					<p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl'>
						Click below to get started
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
				</>
			)}
		</div>
	);
};

export default App;
