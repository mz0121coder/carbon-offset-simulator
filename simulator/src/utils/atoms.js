// this file contains default global states that can be reused and updated throughout the project

import { atom } from 'recoil';

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
	},
});

export const countryData = atom({
	key: 'countryData',
	default: {
		'United States': 15.52,
		'United Kingdom': 5.55,
		Germany: 9.44,
		'South Africa': 6.95,
		India: 1.91,
		China: 7.38,
		Singapore: 8.56,
		Australia: 17.1,
	},
});

export const countriesList = atom({
	key: 'countriesList',
	default: [
		'United States',
		'United Kingdom',
		'Germany',
		'South Africa',
		'India',
		'China',
		'Singapore',
		'Australia',
	],
});
