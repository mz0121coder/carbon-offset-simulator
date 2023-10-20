import React, { useState } from 'react';

const Summary = () => {
	const [summary, setSummary] = useState(
		() => localStorage.getItem('summary') || ''
	);
	return !summary ? (
		<div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(4,_1fr)] border border-black w-[90vw] h-[60vw] md:w-[45vw] md:h-[30vw]'>
			<p>Please submit data to generate a summary.</p>
		</div>
	) : (
		<div className='grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(4,_1fr)] border border-black w-[90vw] h-[60vw] md:w-[45vw] md:h-[30vw]'>
			<p>Summary will appear here</p>
		</div>
	);
};

export default Summary;
