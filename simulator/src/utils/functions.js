const sampleInputs = {
	country: 'United States',
	annualConsumption: 15.52,
	upfrontCost: 120,
	annualCost: 12,
	carbonOffset: 28.5,
	treesPerMonth: 1,
	timeToGrow: 5,
	inflation: 3.7,
};

export const getSummary = inputs => {
	// monthly emissions to offset
	const monthlyEmissions = (inputs.annualConsumption / 12) * 1000;
	// time for a tree to fully grow
	const monthsToGrow = inputs.timeToGrow * 12;
	// starting values
	let months = 0;
	let offsetPerMonth = 0;
	let totalCost = inputs.upfrontCost;
	// inflation adjusted monthly upkeep
	const annualInflationRate = inputs.inflation / 100;
	const monthlyInflationRate = Math.pow(1 + annualInflationRate, 1 / 12) - 1;
	const costPerMonth =
		inputs.annualCost / 12 + monthlyInflationRate * (inputs.annualCost / 12);
	console.log('Monthly Inflation Rate:', monthlyInflationRate);

	let treeCount = 0;
	const treesPlanted = [];
	const summaryTable = [];

	// update the values each month
	while (offsetPerMonth < monthlyEmissions) {
		treeCount += inputs.treesPerMonth;
		months++;
		totalCost += costPerMonth + costPerMonth * monthlyInflationRate;
		// this will be multiplied by trees per month
		const newTrees = { monthPlanted: months, amount: inputs.treesPerMonth };
		treesPlanted.push(newTrees);
		// update the offset, using starting month for each tree
		treesPlanted.forEach(tree => {
			const monthsGrown = months - tree.monthPlanted;
			// add full offset for a fully grown tree
			if (monthsGrown >= monthsToGrow) {
				offsetPerMonth += inputs.treesPerMonth * (inputs.carbonOffset / 12);
			} else {
				// increase the amount offset each month until a tree is fully grown
				const growthPerMonth = inputs.carbonOffset / 12 / monthsToGrow;
				offsetPerMonth += inputs.treesPerMonth * (growthPerMonth * monthsGrown);
			}
		});

		// current month in format 'October 2023'
		const currentDate = new Date();
		const currentMonthYear = currentDate.toLocaleString('en-US', {
			month: 'long',
			year: 'numeric',
		});
		// future month in same format
		const futureDate = new Date(currentDate);
		futureDate.setMonth(currentDate.getMonth() + months);
		const futureMonthYear = futureDate.toLocaleString('en-US', {
			month: 'long',
			year: 'numeric',
		});
		// update summary table each month
		summaryTable.push({
			month: futureMonthYear,
			months: months,
			trees: treeCount,
			offset: Number(offsetPerMonth.toFixed(2)),
			difference: -Number(
				(Number(monthlyEmissions) - Number(offsetPerMonth)).toFixed(2)
			),
		});

		if (offsetPerMonth >= monthlyEmissions) {
			return { summaryTable: summaryTable };
		}
	}
};

console.log(getSummary(sampleInputs));
