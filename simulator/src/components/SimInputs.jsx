import React, { useState, useEffect, useCallback } from 'react';
import {
	countriesList,
	defaultInputs,
	countryData,
	inflationRates,
} from '../utils/atoms';
import { getSummary } from '../utils/functions';

const SimInputs = () => {
	// Arrays for select options
	const offsetInputs = Array.from({ length: 11 }, (_, index) => index + 25);
	const upfrontCostInputs = Array.from(
		{ length: 11 },
		(_, index) => (index + 1) * 5 + 95
	);
	const annualCostInputs = Array.from({ length: 11 }, (_, index) => index + 10);
	const yearsToGrowInputs = Array.from({ length: 10 }, (_, index) => index + 1);
	const treesPerMonthInputs = Array.from(
		{ length: 10 },
		(_, index) => index + 1
	);

	// State variables
	const [formData, setFormData] = useState(
		() => JSON.parse(localStorage.getItem('formData')) || defaultInputs
	);
	const [resetModal, setResetModal] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [summary, setSummary] = useState(
		() => JSON.parse(localStorage.getItem('summary')) || ''
	);

	// Save summary and form data to local storage
	useEffect(() => {
		localStorage.setItem('summary', JSON.stringify(summary));
		localStorage.setItem('formData', JSON.stringify(formData));
	}, [summary, formData]);

	// Update form data when country changes
	useEffect(() => {
		const newForm = { ...formData };
		newForm.annualConsumption = countryData[newForm.country];
		newForm.inflation = inflationRates[newForm.country];
		setFormData(newForm);
	}, [formData.country]);

	// Calculate summary
	const calculateSummary = useCallback(() => {
		const newSummary = getSummary(formData);
		setSummary(newSummary);
	}, [formData, getSummary]);

	useEffect(calculateSummary, [formData]);

	// Handle input change
	const handleInputChange = (inputName, value) => {
		const newForm = { ...formData };
		newForm[inputName] = value;
		setFormData(newForm);
	};

	// Reset form data
	const handleReset = () => {
		setFormData(defaultInputs);
		setResetModal(false);
	};

	// Submit form data
	const handleSubmit = () => {
		const newSummary = getSummary(formData);
		console.log({ newSummary });
		setSummary(newSummary);
		setShowSnackbar(true);
		setTimeout(() => {
			setShowSnackbar(false);
		}, 3000);
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
						onChange={e => handleInputChange('country', e.target.value)}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{countriesList.map((country, idx) => (
							<option key={idx} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
				{/* offset per year - kg */}
				<div className='flex flex-col'>
					<label htmlFor='carbonOffset' className='font-bold'>
						Carbon Offset
					</label>
					<select
						id='carbonOffset'
						value={formData.carbonOffset}
						onChange={e =>
							handleInputChange('carbonOffset', Number(e.target.value))
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{offsetInputs.map((offset, idx) => (
							<option key={idx} value={offset}>
								{offset}
							</option>
						))}
					</select>
				</div>
				{/* upfront cost of planting a tree */}
				<div className='flex flex-col'>
					<label htmlFor='upfrontCost' className='font-bold'>
						Upfront Cost ($)
					</label>
					<select
						id='upfrontCost'
						value={formData.upfrontCost}
						onChange={e =>
							handleInputChange('upfrontCost', Number(e.target.value))
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{upfrontCostInputs.map((upfrontCost, idx) => (
							<option key={idx} value={upfrontCost}>
								{upfrontCost}
							</option>
						))}
					</select>
				</div>
				{/* annual cost of maintaining a tree */}
				<div className='flex flex-col'>
					<label htmlFor='annualCost' className='font-bold'>
						Annual Cost ($)
					</label>
					<select
						id='annualCost'
						value={formData.annualCost}
						onChange={e =>
							handleInputChange('annualCost', Number(e.target.value))
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{annualCostInputs.map((annualCost, idx) => (
							<option key={idx} value={annualCost}>
								{annualCost}
							</option>
						))}
					</select>
				</div>
				{/* years to fully grow */}
				<div className='flex flex-col'>
					<label htmlFor='timeToGrow' className='font-bold'>
						Years to grow
					</label>
					<select
						id='timeToGrow'
						value={formData.timeToGrow}
						onChange={e =>
							handleInputChange('timeToGrow', Number(e.target.value))
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{yearsToGrowInputs.map((yearsToGrow, idx) => (
							<option key={idx} value={yearsToGrow}>
								{yearsToGrow}
							</option>
						))}
					</select>
				</div>
				{/* trees per month */}
				<div className='flex flex-col'>
					<label htmlFor='treesPerMonth' className='font-bold'>
						Trees per Month
					</label>
					<select
						id='treesPerMonth'
						value={formData.treesPerMonth}
						onChange={e =>
							handleInputChange('treesPerMonth', Number(e.target.value))
						}
						className='border border-gray-300 rounded focus:outline-none w-[95%] h-9 py-[2px] px-1 appearance-none'>
						{treesPerMonthInputs.map((treesPerMonth, idx) => (
							<option key={idx} value={treesPerMonth}>
								{treesPerMonth}
							</option>
						))}
					</select>
				</div>
				{/* average CO2 consumption / yr - metric tons */}
				<div className='flex flex-col'>
					<label htmlFor='annualConsumption' className='font-bold'>
						Avg CO2 / yr
					</label>
					<input
						type='number'
						inputMode='numeric'
						id='annualConsumption'
						value={Number(countryData[formData.country])}
						className='border border-gray-300 rounded focus:outline-none h-9 w-[95%] py-[2px] px-1 bg-gray-700 text-white'
						readOnly
					/>
				</div>
				{/* inflation updated dynamically */}
				<div className='flex flex-col'>
					<label htmlFor='inflation' className='font-bold'>
						Inflation Rate
					</label>
					<input
						type='number'
						inputMode='numeric'
						id='inflation'
						value={Number(inflationRates[formData.country])}
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
			{/* success or reset modals */}
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
