import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	defaultTreeState,
	currentTreeState,
	defaultEmissions,
	countries,
} from '../utils/atoms';

const SimInputs = () => {
	const emissions = useRecoilValue(defaultEmissions);
	const [countryNames, setCountryNames] = useRecoilState(countries);
	const [country, setCountry] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [treeInputs, setTreeInputs] = useRecoilState(currentTreeState);
	const [showModal, setShowModal] = useState(false);

	const handleCountryChange = e => {
		const value = e.target.value;
		setCountry(value);
		if (value.length > 0) {
			const filtered = countryNames.filter(
				name =>
					name.toLowerCase().slice(0, value.length) ===
					value.slice(0, value.length)
			);
			setFilteredCountries(filtered);
		} else {
			setFilteredCountries([]);
		}
	};

	const handleCountrySelect = selectedCountry => {
		setCountry(selectedCountry);
		setFilteredCountries([]);
	};

	const getAnnualCO2Consumption = () => {
		const selectedCountry = country.toLowerCase();
		const selectedCountryData = emissions.find(
			item => item.country.toLowerCase() === selectedCountry
		);
		return selectedCountryData ? selectedCountryData.emissionsPerCapita : '';
	};

	const handleInputChange = (e, inputField) => {
		const value = e.target.value;
		setTreeInputs(prevInputs => ({
			...prevInputs,
			[inputField]: value,
		}));
	};

	const handleInputBlur = (inputField, defaultValue) => {
		if (!treeInputs[inputField]) {
			setTreeInputs(prevInputs => ({
				...prevInputs,
				[inputField]: defaultValue,
			}));
		}
	};

	const handleSubmit = () => {
		setShowModal(false);
		// Additional logic to handle form submission
	};

	return (
		<div className='mt-4'>
			<h2 className='text-xl font-bold mb-4'>Simulator Inputs</h2>
			<div className='flex justify-between mb-4'>
				<button
					className='px-4 py-2 bg-blue-500 text-white rounded-md mr-4'
					onClick={() => setShowModal(true)}>
					Set Data
				</button>
				<button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
					View Table
				</button>
			</div>
			{showModal && (
				<div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
					<div className='bg-white p-4 rounded-md'>
						<div className='mt-4'>
							<label
								className='block mb-2 font-bold text-gray-700'
								htmlFor='country-input'>
								Country
							</label>
							<input
								id='country-input'
								type='text'
								className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Enter a country name'
								value={country}
								onChange={handleCountryChange}
								required
							/>
							{filteredCountries.length > 0 && (
								<ul className='mt-2 border rounded-md shadow-sm'>
									{filteredCountries.map(name => (
										<li
											key={name}
											className='px-4 py-2 cursor-pointer hover:bg-gray-100'
											onClick={() => handleCountrySelect(name)}>
											{name}
										</li>
									))}
								</ul>
							)}
						</div>
						{country && (
							<div className='mt-2'>
								<label className='block mb-2 font-bold text-gray-700'>
									Avg. CO<sub>2</sub> per year (tons)
								</label>
								<input
									type='text'
									className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={getAnnualCO2Consumption()}
									readOnly
									required
								/>
							</div>
						)}
						{country && (
							<div className='mt-2'>
								<label className='block mb-2 font-bold text-gray-700'>
									Initial Cost ($)
								</label>
								<input
									type='number'
									step='0.01'
									className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={treeInputs.initialCost}
									onChange={e => handleInputChange(e, 'initialCost')}
									onBlur={() => handleInputBlur('initialCost', 120)}
									required
								/>
							</div>
						)}
						{country && (
							<div className='mt-2'>
								<label className='block mb-2 font-bold text-gray-700'>
									Annual Cost ($)
								</label>
								<input
									type='number'
									step='0.01'
									className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={treeInputs.annualCost}
									onChange={e => handleInputChange(e, 'annualCost')}
									onBlur={() => handleInputBlur('annualCost', 12)}
									required
								/>
							</div>
						)}
						{country && (
							<div className='mt-2'>
								<label className='block mb-2 font-bold text-gray-700'>
									Annual Offset (kg)
								</label>
								<input
									type='number'
									step='0.01'
									className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={treeInputs.annualOffset}
									onChange={e => handleInputChange(e, 'annualOffset')}
									onBlur={() => handleInputBlur('annualOffset', 28.5)}
									required
								/>
							</div>
						)}
						{country && (
							<div className='mt-2'>
								<label className='block mb-2 font-bold text-gray-700'>
									Years to Grow
								</label>
								<input
									type='number'
									className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									value={treeInputs.yearsToGrow}
									onChange={e => handleInputChange(e, 'yearsToGrow')}
									onBlur={() => handleInputBlur('yearsToGrow', 5)}
									required
								/>
							</div>
						)}
						<button
							className='px-4 py-2 bg-blue-500 text-white rounded-md mt-4'
							onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SimInputs;
