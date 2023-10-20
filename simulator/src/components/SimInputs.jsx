import React, { useState, useEffect } from 'react';
import {
	countriesList,
	defaultInputs,
	countryData,
	inflationRates,
} from '../utils/atoms';

const SimInputs = () => {
	const [formData, setFormData] = useState(
		() => JSON.parse(localStorage.getItem('formData')) || defaultInputs
	);

	const [errorModal, setErrorModal] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(formData));
	}, [formData]);

	const handleReset = () => {
		setFormData(defaultInputs);
	};

	const handleSubmit = () => {
		// Validate input fields
		const inputs = Object.values(formData);
		const isInvalid = inputs.filter(input => !/[0-9]+(\.[0-9]+)?$/.test(input));
		// all inputs except country should match digits
		if (isInvalid.length > 1) {
			setErrorModal(true);
		} else {
			setShowSnackbar(true);
			setTimeout(() => {
				setShowSnackbar(false);
			}, 3000);
		}
	};

	return (
		<>
			<div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(3,_1fr)] [@media(max-width:400px)]:w-[95vw] min-w-[300px] max-w-[600px] bg-gray-100 rounded p-4'>
				<div className='flex flex-col'>
					<label htmlFor='country' className='font-bold'>
						Country
					</label>
					<select
						id='country'
						value={formData.country}
						onChange={e =>
							setFormData({ ...formData, country: e.target.value })
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1'>
						{countriesList.map(country => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>{' '}
				<div className='flex flex-col'>
					<label htmlFor='carbonOffset' className='font-bold'>
						Carbon Offset
					</label>
					<input
						type='number'
						id='carbonOffset'
						value={formData.carbonOffset}
						onChange={e =>
							setFormData({ ...formData, carbonOffset: Number(e.target.value) })
						}
						min={10}
						max={50}
						step={0.01}
						className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='upfrontCost' className='font-bold'>
						Upfront Cost ($)
					</label>
					<input
						type='number'
						id='upfrontCost'
						value={formData.upfrontCost}
						onChange={e =>
							setFormData({ ...formData, upfrontCost: Number(e.target.value) })
						}
						min={100}
						max={200}
						step={0.01}
						className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='annualCost' className='font-bold'>
						Annual Cost ($)
					</label>
					<input
						type='number'
						id='annualCost'
						value={formData.annualCost}
						onChange={e =>
							setFormData({ ...formData, annualCost: Number(e.target.value) })
						}
						min={5}
						max={50}
						step={0.01}
						className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='carbonOffset' className='font-bold'>
						Carbon Offset
					</label>
					<input
						type='number'
						id='carbonOffset'
						value={formData.carbonOffset}
						onChange={e =>
							setFormData({ ...formData, carbonOffset: Number(e.target.value) })
						}
						min={10}
						max={50}
						step={0.01}
						className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='treesPerMonth' className='font-bold'>
						Trees per Month
					</label>
					<input
						type='number'
						id='treesPerMonth'
						value={formData.treesPerMonth}
						onChange={e =>
							setFormData({
								...formData,
								treesPerMonth: Number(e.target.value),
							})
						}
						min={1}
						max={50}
						className='border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='annualConsumption' className='font-bold'>
						Avg CO<sub>2</sub> / yr
					</label>
					<input
						min={1}
						step={0.01}
						type='number'
						id='annualConsumption'
						value={Number(countryData[formData.country])}
						onChange={e =>
							setFormData({
								...formData,
								annualConsumption: Number(e.target.value),
							})
						}
						className='border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1 bg-gray-700 text-white'
						readOnly
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='inflation' className='font-bold'>
						Inflation Rate
					</label>
					<input
						type='number'
						id='inflation'
						value={Number(inflationRates[formData.country])}
						onChange={e =>
							setFormData({ ...formData, inflation: Number(e.target.value) })
						}
						min={0}
						max={50}
						step={0.01}
						className='border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1 bg-gray-700 text-white'
						readOnly
					/>
				</div>
			</div>
			<div className='flex justify-around [@media(max-width:400px)]:w-[95vw] min-w-[300px] max-w-[600px]'>
				<button
					className='px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-700'
					onClick={handleReset}>
					Reset Data
				</button>
				<button
					className='px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700'
					onClick={handleSubmit}>
					Submit Data
				</button>
			</div>
			{errorModal && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded min-w-[280px] max-w-[500px]'>
						<p className='text-lg'>
							Each input except country must be a number
						</p>
						<div className='flex justify-end mt-4'>
							<button
								className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
								onClick={() => setErrorModal(false)}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
			{showSnackbar && (
				<div className='fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 text-center'>
					Data updated successfully
				</div>
			)}
		</>
	);
};

export default SimInputs;
