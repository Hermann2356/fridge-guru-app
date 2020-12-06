import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { fetchSuggestions } from '../services/apis';
import { TextField } from '@material-ui/core';

export default ({ onChange, data, id }) => {
	const [state, setState] = useState({
		isLoading: true,
		data: [],
		error: null,
	});

	const handleSugesstions = (status, data) => {
    console.log(status, data)
		if (status === 'success') {
			setState({
				isLoading: false,
				data,
				error: null,
			});
		} else {
			setState({
				isLoading: false,
				data: [],
				error: data,
			});
		}
	};

	const handleSearch = (key) => {
		setState({
			isLoading: true,
			error: null,
			data: [],
		});
		fetchSuggestions(key, data, handleSugesstions);
	};

	return (
		<Autocomplete
			freeSolo
			multiple
			size='small'
			id={id}
			options={state.data}
			value={data}
			getOptionLabel={(option) => option}
			style={{ width: '100%', margin: '.5rem 0' }}
			onChange={(e, value) => {
				onChange(value);
				setState({ ...state, data: [] });
			}}
			renderInput={(params) => (
				<TextField
					{...params}
					variant='outlined'
					onChange={(e) => handleSearch(e.target.value)}
				/>
			)}
			loading={state.isLoading}
			ChipProps={{ color: 'primary', style: { borderRadius: '5px' } }}
		/>
	);
};
