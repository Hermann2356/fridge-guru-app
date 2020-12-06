import React, { useState, useEffect } from 'react';
import Recipiecard from '../components/Recipiecard';
import Search from '../components/Search';
import FiltersBar from '../components/FiltersBar';
import RecipieFilter from '../components/RecipieFilter';
import NavBar from '../components/Navbar';
import { CircularProgress, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Row } from 'reactstrap';
import { getRecipes } from '../services/apis';
import { Skeleton } from '@material-ui/lab';

const RecipePage = () => {
	const [searchKey, setSearchKey] = useState('burger');
	const [recipes, setRecipes] = useState({
		isLoading: true,
		data: [],
		error: null,
	});

	const handleSearch = (value) => {
		setSearchKey(value);
	};

	useEffect(() => {
		handleFilter();
	}, [searchKey]);

	const handleRecipes = (status, data) => {
		if (status === 'success') {
			setRecipes({
				...recipes,
				isLoading: false,
				data,
			});
		} else {
			setRecipes({
				isLoading: false,
				data: [],
				error: data,
			});
		}
	};

	const handleFilter = (data) => {
		setRecipes({
			...recipes,
			isLoading: true,
			error: null,
		});
		getRecipes(searchKey, data, handleRecipes);
	};

	console.log(recipes, searchKey, 'loading 12');

	return (
		<>
			<NavBar />
			<div className='container-fluid pt-4'>
				<div className='row justify-content-center '>
					<div className='col-12 col-md-10'>
						<br />
						<br />
						<div className='d-flex justify-content-between align-items-center'>
							<Search value={searchKey} handleSearch={handleSearch} />
							<RecipieFilter label='Filter' handleFilter={handleFilter} />
						</div>
						<br />
						<br />
						{recipes.isLoading ? (
							<Row className='justify-content-center'>
								<CircularProgress />
							</Row>
						) : recipes.error ? (
							<Alert severity='error'>{recipes.error}</Alert>
						) : recipes.data.length ? (
							<div className='grid-container'>
								{recipes.data.map((recipe) => (
									<div className='grid-item'>
										<Recipiecard cardData={recipe} />
									</div>
								))}
							</div>
						) : (
							<Row className='align-content-center'>
								<Typography>No Recipes Found</Typography>
							</Row>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipePage;
