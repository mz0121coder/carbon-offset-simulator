# Carbon Offset Simulator

## Overview

A clean, responsive and hands-on simulator, to track the potential carbon offsets that can be achieved in multiple countries through regularly planting and maintaining trees.

## Demo

## Functionality

This app allows the user to select a country for tree planting, adjust upfront and annual maintenance costs, as well as annual CO2 offset (kg) per tree, time for a tree to fully grow, and trees planted per month.

With a benchmark of average emissions per year (metric tons) for the selected country, the user is given a target to offset, and will be shown a dynamic summary, table and charts to help track their carbon offsets, inflation-adjusted costs and journey to achieve carbon neutrality.

## Instructions

Using the app is very easy, both on Netlify and locally:

### Deployment

This app is [hosted on Netlify](https://switch2zero-mz.netlify.app/).

From there, you will be shown the landing page, when you can:

- Read a brief overview of the project.
- Click on `Get started` to be directed to the simulator
- Adjust the inputs and country selection.
- Access the updated summary and expense table - for more then 10 months of data, click on the `Next` or `Back` buttons under the table to see the rest.
- View the offset chart - which compares increasing monthly carbon offsets against the benchmark for the selected country.
- View the expenses chart - which shows maintenance, purchase and total costs over time.

### Run Locally

Clone this repository, open it in your IDE such as VS Code, and run these commands in the integrated terminal:

- `cd simulator/` to navigate to the project directory.
- `npm install` to install dependencies.
- `npm run dev` to run the development scripts.
- You should now be able to access the app on `http://localhost:5173/`
