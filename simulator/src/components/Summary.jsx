import React, { useState, useEffect, Suspense } from 'react';

const CarbonOffsets = React.lazy(() => import('./CarbonOffsets'));
const Expenditure = React.lazy(() => import('./Expenditure'));

const Summary = () => {
	const [summary, setSummary] = useState(
		() => JSON.parse(localStorage.getItem('summary')) || ''
	);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		console.log({ summary });
		const interval = setInterval(() => {
			setSummary(() => JSON.parse(localStorage.getItem('summary'))) || '';
		}, 500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const rowsPerPage = 10;
	const totalPages = Math.ceil(summary.expenseTable?.length / rowsPerPage ?? 1);

	const handleNextPage = () => {
		setCurrentPage(prevPage => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage(prevPage => prevPage - 1);
	};

	return (
		<>
			{' '}
			<div className='w-[90vw] h-auto md:w-[50vw] md:h-auto p-4 bg-gray-100 rounded'>
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
						<table className='mt-8 w-full ml-auto mr-auto sm:w-auto bg-white rounded'>
							<thead>
								<tr>
									<th className='py-2 px-4 border border-gray-400 text-left bg-gray-200'>
										Month
									</th>
									<th className='py-2 px-4 border border-gray-400 text-left bg-gray-200'>
										Upkeep
									</th>
									<th className='py-2 px-4 border border-gray-400 text-left bg-gray-200'>
										Purchase
									</th>
									<th
										className={`py-2 px-4 border border-gray-400 text-left bg-gray-200 ${
											window.innerWidth < 576 ? 'hidden' : ''
										}`}>
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
											<td className='py-2 px-2 sm:px-4 border border-gray-400'>
												{item.month.slice(0, 3) + '-' + item.month.slice(-2)}
											</td>
											<td className='py-2 px-2 sm:px-4 border border-gray-400'>
												${item.totalMaintenanceCosts.toFixed(2)}
											</td>
											<td className='py-2 px-2 sm:px-4 border border-gray-400'>
												${item.purchaseCosts.toFixed(2)}
											</td>
											<td
												className={`py-2 px-2 sm:px-4 border border-gray-400 ${
													window.innerWidth < 576 ? 'hidden' : ''
												}`}>
												${item.totalCosts.toFixed(2)}
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
			<Suspense fallback={<div>Loading...</div>}>
				<CarbonOffsets
					summary={summary}
					monthlyEmissions={summary.monthlyEmissions}
				/>
				<Expenditure summary={summary} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}></Suspense>
		</>
	);
};

export default Summary;
