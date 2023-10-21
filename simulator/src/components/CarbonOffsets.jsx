import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const CarbonOffsets = ({ summary, monthlyEmissions }) => {
	const data = summary.summaryTable.map(item => ({
		month: item.month.slice(0, 3) + '-' + item.month.slice(-2),
		offset: item.offset,
		monthlyEmissions: monthlyEmissions,
	}));

	const colorScheme = ['#FF6384', '#36A2EB']; // Add your custom color scheme here

	return (
		<div className='w-[100vw] md:w-[50vw]'>
			<h2 className='text-center font-bold text-lg'>Carbon Offsets</h2>
			<ResponsiveContainer width='100%' height={350}>
				<LineChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='month' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type='monotone'
						dataKey='offset'
						stroke={colorScheme[0]}
						name='Monthly Offset'
					/>
					<Line
						type='monotone'
						dataKey='monthlyEmissions'
						stroke={colorScheme[1]}
						name='Monthly Emissions'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CarbonOffsets;
