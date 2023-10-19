import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultEmissions, countries } from '../utils/atoms';

const SimInputs = () => {
	const emissions = useRecoilValue(defaultEmissions);
	const [countryNames, setCountryNames] = useRecoilState(countries);
	const [country, setCountry] = useState('');
	const [filteredCountries, setFilteredCountries] = useState([]);

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

	return (
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
					/>
				</div>
			)}
		</div>
	);
};

export default SimInputs;
