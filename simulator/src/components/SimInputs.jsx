import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import {
	defaultEmissions,
	currentTreeState,
	defaultTreeState,
} from '../utils/atoms';

const SimInputs = () => {
	const [emissions, setEmissions] = useRecoilState(defaultEmissions);
	return <p>{emissions[0].country}</p>;
};

export default SimInputs;
