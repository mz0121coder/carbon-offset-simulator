// this file contains default global states that can be reused and updated throughout the project

import { atom } from 'recoil';

export const loggedInState = atom({
	key: 'loggedInState',
	default: false,
});

export const defaultTreeState = atom({
	key: 'defaultTreeState',
	default: {
		initialCost: 120,
		annualCost: 12,
		annualOffset: 28.5,
		yearsToGrow: 5,
	},
});
