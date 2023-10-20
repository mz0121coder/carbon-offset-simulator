// this file contains default global states that can be reused and updated throughout the project

import { atom } from 'recoil';

export const defaultInputs = {
	country: 'United States',
	annualConsumption: 15.52,
	upfrontCost: 120,
	annualCost: 12,
	carbonOffset: 28.5,
	treesPerMonth: 1,
	timeToGrow: 5,
	inflation: 3.7,
};

export const loggedInState = atom({
	key: 'loggedInState',
	default: false,
});

export const simulatorInputs = atom({
	key: 'simulatorInputs',
	default: {
		country: 'United States',
		annualConsumption: 15.52,
		upfrontCost: 120,
		annualCost: 12,
		carbonOffset: 28.5,
		treesPerMonth: 1,
		timeToGrow: 5,
		inflation: 3.7,
	},
});

export const countryData = {
	'United States': 15.52,
	'United Kingdom': 5.55,
	Germany: 9.44,
	'South Africa': 6.95,
	India: 1.91,
	China: 7.38,
	Singapore: 8.56,
	Australia: 17.1,
};

export const countriesList = [
	'United States',
	'United Kingdom',
	'Germany',
	'South Africa',
	'India',
	'China',
	'Singapore',
	'Australia',
];

export const inflationRates = {
	'United States': 3.7,
	'United Kingdom': 6.38,
	Germany: 4.53,
	'South Africa': 5.45,
	India: 6.91,
	China: 0.1,
	Singapore: 4,
	Australia: 7,
};
