import React from 'react';
import Axios from 'axios';

export const fetchSuggestions = async (query, body, callBack) => {
	try {
		const options = {
			method: 'GET',
			url:
				'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
			params: { query: query, number: '20', intolerances: body.toString() },
			headers: {
				'x-rapidapi-key': '0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6',
				'x-rapidapi-host':
					'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			},
		};
    let response = await Axios.request(options);
    const data = response.data && response.data.map((item) => item.name) || []
		callBack(
			'success',
			data
		);
	} catch (error) {
		callBack(
			'failed',
			(error.response && error.response.data.message) || 'Something went wrong'
		);
	}
};

export const getRecipes = async (query, body, callBack) => {
	let params = {
		query: query,
		minCalories: 0,
		maxCalories: 10000,
		instructionsRequired: true,
		addRecipeInformation: true,
		fillIngredients: true,
		...body,
	};
	console.log(params, "filter");
	try {
		const options = {
			method: 'GET',
			url:
				'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex',
			params,
			headers: {
				'x-rapidapi-key': '0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6',
				'x-rapidapi-host':
					'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			},
		};
		const response = await Axios.request(options);
		callBack('success', (response.data && response.data.results) || []);
	} catch (error) {
		callBack(
			'failed',
			(error.response && error.response.data.message) || 'Something went wrong'
		);
	}
};
