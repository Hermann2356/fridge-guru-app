import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard'
import axios from 'axios'
import Skeletoncom from '../components/Skeleton'
import Search from '../components/Search'
import NavBar from "../components/Navbar"
import { Typography } from '@material-ui/core';
const api_host = process.env.REACT_APP_SPOONACULAR_HOST;
const api_key = process.env.REACT_APP_SPOONACULAR_KEY;
const RecipePage = () => {

    var [data, setData] = useState([])
    var [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('')
    const [cal, setCal] = useState({
        minCal: '0',
        maxCal: '10000'
    })


    const getResults = async (query) => {

        let giveResponse
        setLoading(true);
        try {

            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex',
                params: {
                    query: query,
                    minCalories: 0,
                    maxCalories: 10000,
                    instructionsRequired: true,
                    addRecipeInformation: true,
                    fillIngredients: true
                },
                headers: {
                    'x-rapidapi-key': api_key,
                    'x-rapidapi-host': api_host,
                }
            };
            const response = await axios.request(options)
            console.log(response.data);
            // giveResponse = response.data.results
            const get = (id) => {
                const options = {
                    method: 'GET',
                    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`,
                    headers: {
                        'x-rapidapi-key': api_key,
                        'x-rapidapi-host': api_host,
                    }
                };
                return axios.request(options);
            }
            const res = await Promise.all(response.data.results.map(d => (get(d.id))));
            const f = response.data.results.map((d, index) => {
                const response = res[index];
                d.ingredients = response.data.ingredients;
                return d;
            })
            giveResponse = f;

        } catch (err) {
            console.log(err)
        }


        setLoading(false);
        setData(giveResponse)
        setFilterData(giveResponse)
        console.log(giveResponse)
        return giveResponse

    }

    const handleSearch = (value) => {
        setValue(value)
        console.log(value)

    }

    const handleCalories = (cal) => {
        setCal(cal)

    }


    let handleFilters = async (filters, query) => {
        setLoading(true);
        let { time, ingredientsCount, includeIngredients, excludeIngredients, intolerances, nutritionFilters: { minCal,
            maxCal,
            minPro,
            maxPro,
            minFats,
            maxFats,
            minCarbs,
            maxCarbs } } = filters
        let giveResponse

        try {
            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex',
                params: {
                    query: query,
                    instructionsRequired: true,
                    addRecipeInformation: true,
                    fillIngredients: true,
                    includeIngredients: includeIngredients.toString(),
                    excludeIngredients: excludeIngredients.toString(),
                    intolerances: intolerances.toString(),
                    minCalories: Number(minCal) || 0,
                    maxCalories: Number(maxCal) || 1000,
                    minFat: Number(minFats) || 0,
                    maxFat: Number(maxFats) || 1000,
                    minProtein: Number(minPro) || 0,
                    maxProtein: Number(maxPro) || 1000,
                    minCarbs: Number(minCarbs) || 0,
                    maxCarbs: Number(maxCarbs) || 1000
                },
                headers: {
                    'x-rapidapi-key': api_key,
                    'x-rapidapi-host': api_host,
                }
            };
            const response = await axios.request(options)
            // console.log(response.data);
            if (Number(ingredientsCount[1]) === 10)
                ingredientsCount[1] = Infinity;
            if (Number(time[1]) === 60)
                time[1] = Infinity;
            const get = (id) => {
                const options = {
                    method: 'GET',
                    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`,
                    headers: {
                        'x-rapidapi-key': api_key,
                        'x-rapidapi-host': api_host,
                    }
                };
                return axios.request(options);
            }
            const res = await Promise.all(response.data.results.map(d => (get(d.id))));
            const f = response.data.results.filter((d, index) => {
                const response = res[index];
                const count = response.data.ingredients.length;
                d.ingredients = response.data.ingredients;
                if (count >= Number(ingredientsCount[0]) && count <= Number(ingredientsCount[1]) && d.readyInMinutes >= Number(time[0]) && d.readyInMinutes <= Number(time[1]))
                    return d;
                else return false;
            })
            giveResponse = f;
        } catch (err) {
            console.log(err)
        }

        setLoading(false);
        setData(giveResponse)
        setFilterData(giveResponse)
        return giveResponse
    }


    useEffect(() => {
        getResults(value)


    }, [value, cal])

    return (
        <div className='container-fluid'>
            <NavBar recipeActive="active"/>
            <div style={{ paddingTop: "10px" }} >
                <div className='row'>
                    {
                        console.log(cal)
                    }

                    <div className="col-12 col-md-12">
                        <br />
                        <br />
                        <Search value={value} handleSearch={handleSearch} handleFilters={handleFilters} />
                        <br />
                        <br />
                        {
                            !loading ? (
                                <>
                                    {
                                        filterData.length > 0 ? <div className="row">


                                            {filterData.map((subData) => (

                                                <div className="col-12 col-md-6 col-lg-4">
                                                    <RecipeCard key={subData.id} cardData={subData} />

                                                </div>
                                            ))}

                                        </div> : (
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '100%' }}>

                                                <Typography>No Recipes Found</Typography>
                                            </div>
                                        )
                                    }
                                </>) : <Skeletoncom />
                        }
                    </div>
                </div>
            </div>
        </div >
    )

}


export default RecipePage;
