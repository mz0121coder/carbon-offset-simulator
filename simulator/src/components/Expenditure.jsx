import React from 'react';
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
	const data = summary.expenseTable.map(item => ({
		month: item.month.slice(0, 3) + '-' + item.month.slice(-2),
		totalCosts: item.totalCosts,
		purchaseCosts: item.purchaseCosts,
		totalMaintenanceCosts: item.totalMaintenanceCosts,
	}));

	const yAxisTickFormatter = value => {
		if (window.innerWidth < 500) {
			if (value >= 1000) {
				return `${(value / 1000).toFixed(0)}k`;
			}
			return value;
		}
		return value;
	};

	return (
		<div className='w-[95vw] md:w-[50vw] text-center'>
			<h2 className='font-bold text-lg'>Total Expenses</h2>
			<ResponsiveContainer width='100%' height={350}>
				<AreaChart data={data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='month' />
					<YAxis tickFormatter={yAxisTickFormatter} />
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
