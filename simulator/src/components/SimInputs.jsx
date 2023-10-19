import React from 'react';
import { useRecoilState } from 'recoil';
import { countryData, countriesList, updateData } from '../utils/atoms';
import { simulatorInputs } from '../utils/atoms';

const SimInputs = () => {
	const [formData, setFormData] = useRecoilState(simulatorInputs);
	const [countriesInfo, setCountriesInfo] = useRecoilState(countryData);
	const [countries, setCountries] = useRecoilState(countriesList);

	const handleReset = () => {
		setFormData({
			country: 'United States',
			annualConsumption: 15.52,
			upfrontCost: 120,
			annualCost: 12,
			carbonOffset: 28.5,
			treesPerMonth: 1,
		});
	};

	const handleSubmit = () => {
		// Perform any necessary data updates or API calls here
		// Display a snackbar with the message 'Data Updated!'
		alert('Data Updated!');
	};

	return (
		<div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(3,_1fr)] border border-black w-[95%] md:w-[45vw] bg-gray-100 rounded p-4'>
			<div className='flex flex-col'>
				<label htmlFor='country' className='font-bold'>
					Country
				</label>
				<select
					id='country'
					value={formData.country}
					onChange={e => setFormData({ ...formData, country: e.target.value })}
					className='border border-gray-300 rounded focus:outline-none w-[95%] h-9'>
					{countries.map(country => (
						<option key={country} value={country}>
							{country}
						</option>
					))}
				</select>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='annualConsumption' className='font-bold'>
					Avg CO2/yr
				</label>
				<input
					min={1}
					step={0.1}
					type='number'
					id='annualConsumption'
					value={formData.annualConsumption}
					onChange={e =>
						setFormData({ ...formData, annualConsumption: e.target.value })
					}
					className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%]'
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='upfrontCost' className='font-bold'>
					Upfront Cost
				</label>
				<input
					type='number'
					id='upfrontCost'
					value={formData.upfrontCost}
					onChange={e =>
						setFormData({ ...formData, upfrontCost: e.target.value })
					}
					min={100}
					max={200}
					className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%]'
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='annualCost' className='font-bold'>
					Annual Cost
				</label>
				<input
					type='number'
					id='annualCost'
					value={formData.annualCost}
					onChange={e =>
						setFormData({ ...formData, annualCost: e.target.value })
					}
					min={10}
					max={30}
					className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%]'
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
						setFormData({ ...formData, carbonOffset: e.target.value })
					}
					min={10}
					max={50}
					className='  border border-gray-300 rounded focus:outline-none h-9 w-[95%]'
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
						setFormData({ ...formData, treesPerMonth: e.target.value })
					}
					min={1}
					max={10}
					className='border border-gray-300 rounded focus:outline-none h-9 w-[95%]'
				/>
			</div>
			{/* <button
				onClick={handleReset}
				className='  bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2 h-[50px] w-[100px]'>
				Reset
			</button>
			<button
				onClick={handleSubmit}
				className='  bg-blue-500 text-white rounded hover:bg-blue-700 h-[50px] w-[100px]'>
				Submit
			</button> */}
		</div>
	);
};

export default SimInputs;
