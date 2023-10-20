import React, { useState, useEffect } from 'react';

const Summary = () => {
	const [summary, setSummary] = useState(
		() => JSON.parse(localStorage.getItem('summary')) || ''
	);

	return (
		<div className='border border-black w-[90vw] h-auto md:w-[50vw] md:h-auto p-4'>
			{!summary ? (
				<p className='text-center text-lg'>
					Please submit data to generate a summary.
				</p>
			) : (
				<>
					<h1 className='text-2xl font-bold mb-4'>Summary</h1>
					<ul className='list-disc pl-6'>
						{summary.summaryDescription.map((item, idx) => (
							<li key={idx} className='text-base mb-2'>
								{item}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Summary;
