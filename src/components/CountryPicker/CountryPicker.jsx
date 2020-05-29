import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountriesName, setFetchedCountriesName] = useState([]);
	useEffect(() => {
		const fetchedCountryName = async () => {
			setFetchedCountriesName(await fetchCountries());
		};

		fetchedCountryName();
	}, [setFetchedCountriesName]);
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{fetchedCountriesName.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
