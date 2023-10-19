// this file contains default global states that can be reused and updated throughout the project

import { atom } from 'recoil';

export const loggedInState = atom({
	key: 'loggedInState',
	default: false,
});

export const defaultTreeState = atom({
	key: 'defaultTreeState',
	default: {
		initialCost: 120,
		annualCost: 12,
		annualOffset: 28.5,
		yearsToGrow: 5,
	},
});
// default values as of 19th October 2023
// this gets updated on render with the scrapeData function in emmissions.js
export const defaultEmissions = atom({
	key: 'defaultEmissions',
	default: [
		{ country: 'China', emissionsPerCapita: '7.44' },
		{ country: 'United States', emissionsPerCapita: '15.32' },
		{ country: 'India', emissionsPerCapita: '1.89' },
		{ country: 'Russia', emissionsPerCapita: '11.45' },
		{ country: 'Japan', emissionsPerCapita: '9.76' },
		{ country: 'Germany', emissionsPerCapita: '9.42' },
		{ country: 'Canada', emissionsPerCapita: '18.72' },
		{ country: 'Iran', emissionsPerCapita: '7.71' },
		{ country: 'South Korea', emissionsPerCapita: '11.77' },
		{ country: 'Indonesia', emissionsPerCapita: '2.02' },
		{ country: 'Saudi Arabia', emissionsPerCapita: '15.47' },
		{ country: 'Brazil', emissionsPerCapita: '2.24' },
		{ country: 'Mexico', emissionsPerCapita: '3.63' },
		{ country: 'Australia', emissionsPerCapita: '17.15' },
		{ country: 'South Africa', emissionsPerCapita: '6.92' },
		{ country: 'Turkey', emissionsPerCapita: '4.54' },
		{ country: 'United Kingdom', emissionsPerCapita: '5.60' },
		{ country: 'Italy', emissionsPerCapita: '5.96' },
		{ country: 'France', emissionsPerCapita: '5.18' },
		{ country: 'Poland', emissionsPerCapita: '7.70' },
		{ country: 'Taiwan', emissionsPerCapita: '11.73' },
		{ country: 'Thailand', emissionsPerCapita: '3.84' },
		{ country: 'Malaysia', emissionsPerCapita: '8.45' },
		{ country: 'Spain', emissionsPerCapita: '5.42' },
		{ country: 'Ukraine', emissionsPerCapita: '5.20' },
		{ country: 'Kazakhstan', emissionsPerCapita: '12.83' },
		{ country: 'Egypt', emissionsPerCapita: '2.20' },
		{ country: 'United Arab Emirates', emissionsPerCapita: '24.33' },
		{ country: 'Vietnam', emissionsPerCapita: '2.21' },
		{ country: 'Argentina', emissionsPerCapita: '4.60' },
		{ country: 'Pakistan', emissionsPerCapita: '0.83' },
		{ country: 'Venezuela', emissionsPerCapita: '5.72' },
		{ country: 'Netherlands', emissionsPerCapita: '9.54' },
		{ country: 'Iraq', emissionsPerCapita: '4.20' },
		{ country: 'Algeria', emissionsPerCapita: '3.87' },
		{ country: 'Philippines', emissionsPerCapita: '1.21' },
		{ country: 'Czech Republic (Czechia)', emissionsPerCapita: '10.62' },
		{ country: 'Uzbekistan', emissionsPerCapita: '3.48' },
		{ country: 'Kuwait', emissionsPerCapita: '25.07' },
		{ country: 'Qatar', emissionsPerCapita: '38.14' },
		{ country: 'Belgium', emissionsPerCapita: '8.37' },
		{ country: 'Oman', emissionsPerCapita: '19.97' },
		{ country: 'Nigeria', emissionsPerCapita: '0.44' },
		{ country: 'Chile', emissionsPerCapita: '4.49' },
		{ country: 'Turkmenistan', emissionsPerCapita: '13.51' },
		{ country: 'Romania', emissionsPerCapita: '3.98' },
		{ country: 'Colombia', emissionsPerCapita: '1.63' },
		{ country: 'Bangladesh', emissionsPerCapita: '0.47' },
		{ country: 'Austria', emissionsPerCapita: '8.44' },
		{ country: 'Greece', emissionsPerCapita: '6.31' },
		{ country: 'Israel', emissionsPerCapita: '7.99' },
		{ country: 'Belarus', emissionsPerCapita: '6.45' },
		{ country: 'North Korea', emissionsPerCapita: '2.31' },
		{ country: 'Morocco', emissionsPerCapita: '1.64' },
		{ country: 'Peru', emissionsPerCapita: '1.85' },
		{ country: 'Libya', emissionsPerCapita: '8.39' },
		{ country: 'Finland', emissionsPerCapita: '9.31' },
		{ country: 'Hungary', emissionsPerCapita: '5.20' },
		{ country: 'Bulgaria', emissionsPerCapita: '7.02' },
		{ country: 'Portugal', emissionsPerCapita: '4.85' },
		{ country: 'Singapore', emissionsPerCapita: '8.47' },
		{ country: 'Hong Kong', emissionsPerCapita: '6.33' },
		{ country: 'Sweden', emissionsPerCapita: '4.49' },
		{ country: 'Norway', emissionsPerCapita: '8.30' },
		{ country: 'Serbia', emissionsPerCapita: '5.49' },
		{ country: 'Ecuador', emissionsPerCapita: '2.44' },
		{ country: 'Switzerland', emissionsPerCapita: '4.74' },
		{ country: 'Ireland', emissionsPerCapita: '8.29' },
		{ country: 'Syria', emissionsPerCapita: '2.01' },
		{ country: 'Denmark', emissionsPerCapita: '6.66' },
		{ country: 'Slovakia', emissionsPerCapita: '6.78' },
		{ country: 'Trinidad and Tobago', emissionsPerCapita: '23.80' },
		{ country: 'Azerbaijan', emissionsPerCapita: '3.37' },
		{ country: 'New Zealand', emissionsPerCapita: '7.13' },
		{ country: 'Angola', emissionsPerCapita: '1.05' },
		{ country: 'Cuba', emissionsPerCapita: '2.68' },
		{ country: 'Tunisia', emissionsPerCapita: '2.52' },
		{ country: 'Bosnia and Herzegovina', emissionsPerCapita: '7.38' },
		{ country: 'Yemen', emissionsPerCapita: '0.88' },
		{ country: 'Bahrain', emissionsPerCapita: '17.35' },
		{ country: 'Dominican Republic', emissionsPerCapita: '2.23' },
		{ country: 'Jordan', emissionsPerCapita: '2.29' },
		{ country: 'Estonia', emissionsPerCapita: '17.02' },
		{ country: 'Lebanon', emissionsPerCapita: '3.49' },
		{ country: 'Bolivia', emissionsPerCapita: '1.73' },
		{ country: 'Croatia', emissionsPerCapita: '4.60' },
		{ country: 'Mongolia', emissionsPerCapita: '6.13' },
		{ country: 'Guatemala', emissionsPerCapita: '1.14' },
		{ country: 'Sri Lanka', emissionsPerCapita: '0.86' },
		{ country: 'Myanmar', emissionsPerCapita: '0.32' },
		{ country: 'Kenya', emissionsPerCapita: '0.34' },
		{ country: 'Montenegro', emissionsPerCapita: '25.66' },
		{ country: 'Slovenia', emissionsPerCapita: '7.04' },
		{ country: 'Ghana', emissionsPerCapita: '0.49' },
		{ country: 'Lithuania', emissionsPerCapita: '4.66' },
		{ country: 'Sudan', emissionsPerCapita: '0.34' },
		{ country: 'Panama', emissionsPerCapita: '2.88' },
		{ country: 'Ethiopia', emissionsPerCapita: '0.10' },
		{ country: 'Luxembourg', emissionsPerCapita: '17.39' },
		{ country: 'Zimbabwe', emissionsPerCapita: '0.70' },
		{ country: "Côte d'Ivoire", emissionsPerCapita: '0.42' },
		{ country: 'Afghanistan', emissionsPerCapita: '0.29' },
		{ country: 'Tanzania', emissionsPerCapita: '0.18' },
		{ country: 'Cameroon', emissionsPerCapita: '0.40' },
		{ country: 'Honduras', emissionsPerCapita: '0.99' },
		{ country: 'Papua New Guinea', emissionsPerCapita: '1.02' },
		{ country: 'Jamaica', emissionsPerCapita: '3.19' },
		{ country: 'North Macedonia', emissionsPerCapita: '4.22' },
		{ country: 'Georgia', emissionsPerCapita: '2.28' },
		{ country: 'Costa Rica', emissionsPerCapita: '1.68' },
		{ country: 'Moldova', emissionsPerCapita: '2.56' },
		{ country: 'Senegal', emissionsPerCapita: '0.56' },
		{ country: 'Latvia', emissionsPerCapita: '4.13' },
		{ country: 'Nepal', emissionsPerCapita: '0.28' },
		{ country: 'Brunei', emissionsPerCapita: '18.01' },
		{ country: 'Kyrgyzstan', emissionsPerCapita: '1.15' },
		{ country: 'Cyprus', emissionsPerCapita: '5.74' },
		{ country: 'El Salvador', emissionsPerCapita: '1.10' },
		{ country: 'DR Congo', emissionsPerCapita: '0.08' },
		{ country: 'Benin', emissionsPerCapita: '0.58' },
		{ country: 'Uruguay', emissionsPerCapita: '1.91' },
		{ country: 'Cambodia', emissionsPerCapita: '0.42' },
		{ country: 'Botswana', emissionsPerCapita: '2.74' },
		{ country: 'Tajikistan', emissionsPerCapita: '0.69' },
		{ country: 'Paraguay', emissionsPerCapita: '0.96' },
		{ country: 'Mozambique', emissionsPerCapita: '0.21' },
		{ country: 'Gabon', emissionsPerCapita: '2.73' },
		{ country: 'Nicaragua', emissionsPerCapita: '0.83' },
		{ country: 'Congo', emissionsPerCapita: '1.00' },
		{ country: 'Albania', emissionsPerCapita: '1.81' },
		{ country: 'Uganda', emissionsPerCapita: '0.13' },
		{ country: 'Armenia', emissionsPerCapita: '1.60' },
		{ country: 'Laos', emissionsPerCapita: '0.66' },
		{ country: 'Bahamas', emissionsPerCapita: '11.12' },
		{ country: 'Zambia', emissionsPerCapita: '0.25' },
		{ country: 'South Sudan', emissionsPerCapita: '0.36' },
		{ country: 'Iceland', emissionsPerCapita: '11.69' },
		{ country: 'Namibia', emissionsPerCapita: '1.68' },
		{ country: 'Guyana', emissionsPerCapita: '4.29' },
		{ country: 'Mauritius', emissionsPerCapita: '2.47' },
		{ country: 'Macao', emissionsPerCapita: '4.96' },
		{ country: 'Haiti', emissionsPerCapita: '0.29' },
		{ country: 'Madagascar', emissionsPerCapita: '0.12' },
		{ country: 'Martinique', emissionsPerCapita: '7.14' },
		{ country: 'Mauritania', emissionsPerCapita: '0.63' },
		{ country: 'Guadeloupe', emissionsPerCapita: '6.23' },
		{ country: 'Burkina Faso', emissionsPerCapita: '0.12' },
		{ country: 'New Caledonia', emissionsPerCapita: '8.24' },
		{ country: 'Togo', emissionsPerCapita: '0.30' },
		{ country: 'Malta', emissionsPerCapita: '4.83' },
		{ country: 'Equatorial Guinea', emissionsPerCapita: '1.54' },
		{ country: 'Suriname', emissionsPerCapita: '3.70' },
		{ country: 'Niger', emissionsPerCapita: '0.10' },
		{ country: 'Guinea', emissionsPerCapita: '0.17' },
		{ country: 'Malawi', emissionsPerCapita: '0.10' },
		{ country: 'Fiji', emissionsPerCapita: '1.85' },
		{ country: 'Bhutan', emissionsPerCapita: '2.24' },
		{ country: 'Chad', emissionsPerCapita: '0.11' },
		{ country: 'Mali', emissionsPerCapita: '0.09' },
		{ country: 'Barbados', emissionsPerCapita: '5.53' },
		{ country: 'Djibouti', emissionsPerCapita: '1.47' },
		{ country: 'French Guiana', emissionsPerCapita: '5.61' },
		{ country: 'Rwanda', emissionsPerCapita: '0.12' },
		{ country: 'Sierra Leone', emissionsPerCapita: '0.17' },
		{ country: 'Somalia', emissionsPerCapita: '0.09' },
		{ country: 'Maldives', emissionsPerCapita: '2.71' },
		{ country: 'Réunion', emissionsPerCapita: '1.22' },
		{ country: 'Belize', emissionsPerCapita: '3.03' },
		{ country: 'Burundi', emissionsPerCapita: '0.10' },
		{ country: 'French Polynesia', emissionsPerCapita: '3.42' },
		{ country: 'Liberia', emissionsPerCapita: '0.18' },
		{ country: 'Puerto Rico', emissionsPerCapita: '0.21' },
		{ country: 'Eritrea', emissionsPerCapita: '0.20' },
		{ country: 'Eswatini', emissionsPerCapita: '0.58' },
		{ country: 'Bermuda', emissionsPerCapita: '10.14' },
		{ country: 'Saint Lucia', emissionsPerCapita: '3.45' },
		{ country: 'Gibraltar', emissionsPerCapita: '17.59' },
		{ country: 'Grenada', emissionsPerCapita: '4.63' },
		{ country: 'Central African Republic', emissionsPerCapita: '0.11' },
		{ country: 'Seychelles', emissionsPerCapita: '5.17' },
		{ country: 'Timor-Leste', emissionsPerCapita: '0.40' },
		{ country: 'Antigua and Barbuda', emissionsPerCapita: '4.84' },
		{ country: 'Cayman Islands', emissionsPerCapita: '6.52' },
		{ country: 'St. Vincent & Grenadines', emissionsPerCapita: '3.42' },
		{ country: 'Solomon Islands', emissionsPerCapita: '0.54' },
		{ country: 'Guinea-Bissau', emissionsPerCapita: '0.17' },
		{ country: 'Lesotho', emissionsPerCapita: '0.15' },
		{ country: 'Aruba', emissionsPerCapita: '2.74' },
		{ country: 'Gambia', emissionsPerCapita: '0.11' },
		{ country: 'Tonga', emissionsPerCapita: '2.38' },
		{ country: 'Western Sahara', emissionsPerCapita: '0.41' },
		{ country: 'Saint Kitts & Nevis', emissionsPerCapita: '4.25' },
		{ country: 'Dominica', emissionsPerCapita: '2.65' },
		{ country: 'Samoa', emissionsPerCapita: '0.83' },
		{ country: 'Vanuatu', emissionsPerCapita: '0.49' },
		{ country: 'Comoros', emissionsPerCapita: '0.15' },
		{ country: 'British Virgin Islands', emissionsPerCapita: '3.35' },
		{ country: 'Cabo Verde', emissionsPerCapita: '0.18' },
		{ country: 'Turks and Caicos', emissionsPerCapita: '1.71' },
		{ country: 'Sao Tome & Principe', emissionsPerCapita: '0.27' },
		{ country: 'Kiribati', emissionsPerCapita: '0.45' },
		{ country: 'Falkland Islands', emissionsPerCapita: '13.84' },
		{ country: 'Palau', emissionsPerCapita: '2.34' },
		{ country: 'Cook Islands', emissionsPerCapita: '2.13' },
		{ country: 'Anguilla', emissionsPerCapita: '2.04' },
		{ country: 'Saint Helena', emissionsPerCapita: '2.38' },
		{ country: 'Saint Pierre & Miquelon', emissionsPerCapita: '1.48' },
		{ country: 'Faeroe Islands', emissionsPerCapita: '0.04' },
		{ country: 'Greenland', emissionsPerCapita: '0.03' },
	],
});
