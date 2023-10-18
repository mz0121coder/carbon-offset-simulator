import React from 'react';
import logo from './assets/mz-tech-logo.png';

const App = () => {
	return (
		<div className='flex flex-col items-center leading-loose gap-4'>
			<img src={logo} alt='MZ tech logo' className='w-64 h-64' />
			<h1 className='text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl'>
				Carbon Offset Simulator
			</h1>
			<p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl'>
				Login or sign up to get started
			</p>
			<button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
				Get started
			</button>
		</div>
	);
};

export default App;
