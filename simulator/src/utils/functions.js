export const getSummary = inputs => {
	// monthly emissions to offset
	const monthlyEmissions = (inputs.annualConsumption / 12) * 1000;
	// time for a tree to fully grow
	const monthsToGrow = inputs.timeToGrow * 12;
	// starting values
	let months = 0;
	let offsetPerMonth = 0;
	let totalCosts = 0;
	let purchaseCosts = 0;
	let totalMaintenanceCosts = 0;
	let monthlyMaintenanceCosts = 0;
	// inflation adjusted monthly upkeep
	const annualInflationRate = inputs.inflation / 100;
	const monthlyInflationRate = Math.pow(1 + annualInflationRate, 1 / 12) - 1;
	const costPerMonth =
		inputs.annualCost / 12 + monthlyInflationRate * (inputs.annualCost / 12);

	let treeCount = 0;
	const treesPlanted = [];

	const summaryTable = [];
	const expenseTable = [];

	// update the values each month
	while (offsetPerMonth < monthlyEmissions) {
		months++;
		treeCount += inputs.treesPerMonth;
		// add up total + purchase costs
		totalCosts += inputs.upfrontCost * inputs.treesPerMonth;
		purchaseCosts += inputs.upfrontCost * inputs.treesPerMonth;
		// add up monthly + total maintenance costs
		monthlyMaintenanceCosts =
			treeCount * (costPerMonth + costPerMonth * monthlyInflationRate);

		totalCosts += monthlyMaintenanceCosts;
		totalMaintenanceCosts += monthlyMaintenanceCosts;

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
		// update expense table
		expenseTable.push({
			month: futureMonthYear,
			totalCosts: Number(totalCosts.toFixed(2)),
			purchaseCosts: Number(purchaseCosts.toFixed(2)),
			totalMaintenanceCosts: Number(totalMaintenanceCosts.toFixed(2)),
			monthlyMaintenanceCosts: Number(monthlyMaintenanceCosts.toFixed(2)),
		});

		if (offsetPerMonth >= monthlyEmissions) {
			const summaryDescription = [
				`You will achieve carbon neutrality in ${futureMonthYear} with ${treeCount} trees planted.`,
				`Your monthly maintenance cost (adjusted for inflation) for carbon neutrality at that point is USD $${monthlyMaintenanceCosts.toFixed(
					2
				)}.`,
				`Your estimated expenditure over ${months} months is USD $${totalCosts.toFixed(
					2
				)}. This comprises USD $${purchaseCosts.toFixed(
					2
				)} in purchase costs and USD $${totalMaintenanceCosts.toFixed(
					2
				)} in maintenance fees.`,
			];

			return {
				summaryTable: summaryTable,
				expenseTable: expenseTable,
				summaryDescription: summaryDescription,
			};
		}
	}
};

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

console.log(getSummary(sampleInputs));
