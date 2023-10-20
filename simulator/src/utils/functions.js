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
/*
take in inputs
get current month in format 'October 2023' 
monthly emissions = (annual consumption / 12) * 100


use an array of objects to track trees planted and their offset

*/
export const getSummary = inputs => {
	// current month in format 'October 2023'
	const currentDate = new Date();
	const currentMonthYear = currentDate.toLocaleString('en-US', {
		month: 'long',
		year: 'numeric',
	});
	// monthly emissions to offset
	const monthlyEmissions = (inputs.annualConsumption / 12) * 1000;
	// time for a tree to fully grow
	const monthsToGrow = inputs.timeToGrow * 12;
	// starting values
	let months = 0;
	let offsetPerMonth = 0;
	let cost = inputs.upfrontCost;
	// inflation adjusted monthly upkeep
	const monthlyInflation = inputs.inflation / 100 / 12;
	const monthlyCost =
		inputs.annualCost / 12 + monthlyInflation * (inputs.annualCost / 12);

	const treesPlanted = [];
	// update the values each month
	while (offsetPerMonth < monthlyEmissions) {
		months++;
		cost += monthlyCost;
		const newTree = { monthPlanted: months };
		treesPlanted.push(newTree);
		// update the offset, using starting month for each tree
		treesPlanted.slice(0, -1).forEach(tree => {
			const monthsGrown = months - tree.monthPlanted;
			// add full offset for a fully grown tree
			if (monthsGrown >= monthsToGrow) {
				offsetPerMonth += inputs.carbonOffset;
			} else {
				// increase the amount offset each month until a tree is fully grown
				const growthPerMonth = inputs.carbonOffset / monthsToGrow;
				offsetPerMonth += growthPerMonth * monthsGrown;
			}
		});
		console.log({ months, offsetPerMonth, monthlyEmissions });
	}
};

console.log(getSummary(sampleInputs));
