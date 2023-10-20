import React, { useState, useEffect } from 'react';

const Summary = () => {
	const [summary, setSummary] = useState(
		JSON.parse(localStorage.getItem('summary')) || ''
	);

	useEffect(() => {
		setSummary(JSON.parse(localStorage.getItem('summary'))) || '';
	});

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
							<li key={item} className='text-base mb-2'>
								{item}
							</li>
						))}
					</ul>

					<table className='mt-8 w-full'>
						<thead>
							<tr>
								<th className='py-2 px-4 border border-gray-400'>Month</th>
								<th className='py-2 px-4 border border-gray-400'>
									Maintenance
								</th>
								<th className='py-2 px-4 border border-gray-400'>
									Purchase Costs
								</th>
								<th className='py-2 px-4 border border-gray-400'>
									Total Costs
								</th>
							</tr>
						</thead>
						<tbody>
							{summary.expenseTable.map((item, idx) => (
								<tr key={idx}>
									<td className='py-2 px-4 border border-gray-400'>
										{item.month}
									</td>
									<td className='py-2 px-4 border border-gray-400'>
										{item.totalMaintenanceCosts}
									</td>
									<td className='py-2 px-4 border border-gray-400'>
										{item.purchaseCosts}
									</td>
									<td className='py-2 px-4 border border-gray-400'>
										{item.totalCosts}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default Summary;
