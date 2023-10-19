// this file dynamically scrapes CO2 emmisions data for every country
// the atoms.js file contains default values as a fallback

import axios from 'axios';
import cheerio from 'cheerio';

const fetchData = async () => {
	const result = await axios.get(
		'https://www.worldometers.info/co2-emissions/co2-emissions-per-capita/'
	);
	return cheerio.load(result.data);
};

const scrapeData = async () => {
	const $ = await fetchData();
	const tableRows = $('table#example2 tbody tr');
	const emissionsData = [];
	tableRows.each((index, element) => {
		const country = $(element).find('td:nth-child(2)').text().trim();
		const emissionsPerCapita = $(element).find('td:nth-child(3)').text().trim();
		emissionsData.push({ country, emissionsPerCapita });
	});
	return emissionsData;
};

scrapeData()
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.log(error);
	});
