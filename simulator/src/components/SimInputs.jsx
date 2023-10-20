import React, { useState, useEffect } from 'react';
import {
	countriesList,
	defaultInputs,
	countryData,
	inflationRates,
} from '../utils/atoms';
import { getSummary } from '../utils/functions';

const SimInputs = () => {
	const [formData, setFormData] = useState(
		() => JSON.parse(localStorage.getItem('formData')) || defaultInputs
	);
	const [errorModal, setErrorModal] = useState(false);
	const [resetModal, setResetModal] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);

	// const [annualConsumption, setAnnualConsumption] = useState(
	// 	defaultInputs.annualConsumption
	// );
	// const [inflation, setInflation] = useState(defaultInputs.inflation);

	const [summary, setSummary] = useState(
		() => JSON.parse(localStorage.getItem('summary')) || ''
	);

	useEffect(() => {
		localStorage.setItem('summary', JSON.stringify(summary));
	});

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(formData));
	});

	useEffect(() => {
		const newForm = { ...formData };
		newForm.annualConsumption = countryData[formData.country];
		newForm.inflation = inflationRates[formData.country];
		setFormData(newForm);
	}, [formData.country]);

	useEffect(() => {
		const newSummary = getSummary(formData);
		setSummary(newSummary);
	}, [formData]);

	const handleReset = () => {
		setFormData(defaultInputs);
		setResetModal(false);
	};
	const handleSubmit = () => {
		// Validate input fields
		const inputs = Object.values(formData);
		const isInvalid = inputs.filter(input => !/[0-9]+(\.[0-9]+)?$/.test(input));
		// all inputs except country should match digits
		if (isInvalid.length > 1) {
			setErrorModal(true);
		} else {
			// // Use the getSummary function with formData as input
			// const newForm = { ...formData };
			// newForm.annualConsumption = countryData[formData.country];
			// newForm.inflation = inflationRates[formData.country];
			// setFormData(newForm);
			const newSummary = getSummary(formData);
			console.log({ newSummary });
			setSummary(newSummary);

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
						onChange={e => {
							const newForm = { ...formData };
							newForm.country = e.target.value;
							setFormData(newForm);
						}}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1'>
						{countriesList.map(country => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='carbonOffset' className='font-bold'>
						Carbon Offset
					</label>
					<input
						type='number'
						id='carbonOffset'
						value={formData.carbonOffset}
						onChange={e => {
							const newForm = { ...formData };
							newForm.carbonOffset = Number(e.target.value);
							setFormData(newForm);
						}}
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
						onChange={e => {
							const newForm = { ...formData };
							newForm.upfrontCost = Number(e.target.value);
							setFormData(newForm);
						}}
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
						onChange={e => {
							const newForm = { ...formData };
							newForm.annualCost = Number(e.target.value);
							setFormData(newForm);
						}}
						min={5}
						max={50}
						step={0.01}
						className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='timeToGrow' className='font-bold'>
						Years to grow
					</label>
					<input
						type='number'
						id='timeToGrow'
						value={formData.timeToGrow}
						onChange={e => {
							const newForm = { ...formData };
							newForm.timeToGrow = Number(e.target.value);
							setFormData(newForm);
						}}
						min={1}
						max={20}
						step={1}
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
						onChange={e => {
							const newForm = { ...formData };
							newForm.treesPerMonth = Number(e.target.value);
							setFormData(newForm);
						}}
						min={1}
						max={50}
						className='border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='annualConsumption' className='font-bold'>
						Avg CO2 / yr
					</label>
					<input
						min={1}
						step={0.01}
						type='number'
						id='annualConsumption'
						value={Number(countryData[formData.country])}
						onChange={e => {
							const newForm = { ...formData };
							newForm.annualConsumption = Number(e.target.value);
							setFormData(newForm);
						}}
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
					onClick={() => {
						if (JSON.stringify(formData) !== JSON.stringify(defaultInputs))
							setResetModal(true);
					}}>
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
			{resetModal && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-4 rounded min-w-[280px] max-w-[500px]'>
						<p className='text-lg'>Are you sure you want to reset the data?</p>
						<div className='flex justify-end mt-4 gap-4'>
							<button
								className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2 w-[70px]'
								onClick={handleReset}>
								Yes
							</button>
							<button
								className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 w-[70px]'
								onClick={() => setResetModal(false)}>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default SimInputs;
