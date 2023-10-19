import React from 'react';
import {
	country,
	annualConsumption,
	upfrontCost,
	annualCost,
	carbonOffset,
	treesPerMonth,
} from '../utils/atoms';
import { useRecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';

const SimInputs = () => {
	return (
		<div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(4,_1fr)] border border-black w-[90vw] h-[60vw] md:w-[45vw] md:h-[30vw]'>
			SimulatorInputs
		</div>
	);
};

export default SimInputs;
