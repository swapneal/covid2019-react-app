import axios from 'axios';
const mainURL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let url = mainURL;
	if (country) {
		url = `${mainURL}/countries/${country}`;
	}
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(url);

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (error) {
		console.error(' Error from axios call for fetch data ===>  ', error);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${mainURL}/daily`);

		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (error) {
		console.error(' Error from axios call for fetch daily data ===>  ', error);
	}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${mainURL}/countries`);
		return countries.map((country) => country.name);
	} catch (error) {
		console.error(' Error from axios call for fetch countries ===>  ', error);
	}
};
