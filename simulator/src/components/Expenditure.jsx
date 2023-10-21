import React, { useEffect } from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const Expenditure = ({ summary }) => {
	const data = summary.expenseTable;
	useEffect(() => {
		console.log(data);
	}, []);
	return (
		<div className='w-[100vw] md:w-[50vw] text-center'>
			<h2 className='font-bold text-lg'>Total Expenses</h2>
			<ResponsiveContainer width='100%' height={350}>
				<AreaChart data={data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='month' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type='monotone'
						dataKey='totalCosts'
						name='Total Costs'
						stroke='#8884d8'
						fill='#8884d8'
					/>
					<Area
						type='monotone'
						dataKey='purchaseCosts'
						name='Purchase Costs'
						stroke='#82ca9d'
						fill='#82ca9d'
					/>
					<Area
						type='monotone'
						dataKey='totalMaintenanceCosts'
						name='Maintenance Costs'
						stroke='#ffc658'
						fill='#ffc658'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Expenditure;
