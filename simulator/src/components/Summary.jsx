import React, { useState, useEffect } from 'react';

const Summary = () => {
	const [summary, setSummary] = useState(
		() => JSON.parse(localStorage.getItem('summary')) || ''
	);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setSummary(() => JSON.parse(localStorage.getItem('summary'))) || '';
		}, 500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const rowsPerPage = 10;
	const totalPages = Math.ceil(summary.expenseTable?.length / rowsPerPage ?? 0);

	const handleNextPage = () => {
		setCurrentPage(prevPage => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage(prevPage => prevPage - 1);
	};

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
								<th className='py-2 px-4 border border-gray-400 text-left'>
									Month
								</th>
								<th className='py-2 px-4 border border-gray-400 text-left'>
									Upkeep
								</th>
								<th className='py-2 px-4 border border-gray-400 text-left'>
									Purchase
								</th>
								<th className='py-2 px-4 border border-gray-400 text-left'>
									Total
								</th>
							</tr>
						</thead>
						<tbody>
							{summary.expenseTable
								.slice(
									(currentPage - 1) * rowsPerPage,
									currentPage * rowsPerPage
								)
								.map((item, idx) => (
									<tr key={idx}>
										<td className='py-2 px-4 border border-gray-400'>
											{item.month.slice(0, 3) + '-' + item.month.slice(-2)}
										</td>
										<td className='py-2 px-4 border border-gray-400'>
											${item.totalMaintenanceCosts}
										</td>
										<td className='py-2 px-4 border border-gray-400'>
											${item.purchaseCosts + '.00'}
										</td>
										<td className='py-2 px-4 border border-gray-400'>
											${item.totalCosts}
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<div className='flex justify-center mt-4 gap-10'>
						<button
							className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ${
								currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							onClick={handlePrevPage}
							disabled={currentPage === 1}>
							Back
						</button>
						<button
							className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${
								currentPage === totalPages
									? 'opacity-50 cursor-not-allowed'
									: ''
							}`}
							onClick={handleNextPage}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Summary;
