import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slider, Tab, Tabs, TextField, Typography, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Autocomplete } from '@material-ui/lab';
import Axios from 'axios';
import FiltersBar from './FiltersBar';

export const FilterDialog = ({ isOpen, setIsOpen, filters, setFilters, handleFilters, value,clearFilters }) => {
    const theme = useTheme()
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabIndexChange = (index) => {
        setTabIndex(index);
    }
    function valuetext(value) {
        return `${value}`;
    }

    function filterRecipes() {
        setIsOpen(false);
        handleFilters(filters, value)
    }
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} aria-labelledby="Filter Recipes" maxWidth="sm">
            <DialogTitle id="Filter Recipes">Filter Recipes</DialogTitle>
            <DialogContent>

                <Tabs
                    value={tabIndex}
                    onChange={(e, value) => handleTabIndexChange(value)}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Ingredients " />
                    <Tab label="Nutrition " />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={tabIndex}
                    onChangeIndex={(index) => handleTabIndexChange(index)}
                >
                    <TabPanel value={tabIndex} index={0} dir={theme.direction}>
                        <div >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                <Typography>
                                    0 minutes
                    </Typography>
                                <Typography>
                                    60+ minutes
                    </Typography>
                            </div>
                            <Slider
                                value={filters.time}
                                max={60}
                                onChange={(e, newValue) => setFilters({ ...filters, time: newValue })}
                                valueLabelDisplay="auto"
                                aria-labelledby="Time"
                                getAriaValueText={valuetext}
                            />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                <Typography>
                                    0 ingredients
                    </Typography>
                                <Typography>
                                    10+ ingredients
                    </Typography>
                            </div>
                            <Slider
                                value={filters.ingredientsCount}
                                max={10}
                                onChange={(e, newValue) => setFilters({ ...filters, ingredientsCount: newValue })}
                                valueLabelDisplay="auto"
                                aria-labelledby="Time"
                                getAriaValueText={valuetext}
                            />
                            <Typography>
                                Include Ingredients
                    </Typography>
                            <SearchIngredients id="ingredientssearch1" state={filters.includeIngredients} onChange={(value) => setFilters({ ...filters, includeIngredients: value })} />
                            <Typography>
                                Exclude Ingredients
                    </Typography>
                            <SearchIngredients id="ingredientsearch2" state={filters.excludeIngredients} onChange={(value) => setFilters({ ...filters, excludeIngredients: value })} />
                            <Typography>
                                Allergy Ingredients
                    </Typography>
                            <SearchIngredients id="intolerances1" state={filters.intolerances} onChange={(value) => setFilters({ ...filters, intolerances: value })} />
                        </div>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={1} dir={theme.direction}>
                        <FiltersBar state={filters.nutritionFilters} onChange={(value) => setFilters({ ...filters, nutritionFilters: value })} />
                    </TabPanel>

                </SwipeableViews>
            </DialogContent>
            <DialogActions>
                <div style={{ width: '100%' }}>

                    <Button fullWidth color="primary" onClick={filterRecipes} >
                        Filter Recipes
</Button>
                    <Button fullWidth color="secondary" onClick={clearFilters}>
                        Clear filter
</Button>
                </div>
            </DialogActions>
        </Dialog>
    )
}



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>{children}
                </Box>
            )}
        </div>
    );
}
const SearchIngredients = ({ onChange, state, id }) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const getAutoCompleteResults = (query) => {
        if (query.length >= 2) {
            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
                params: { query: query, number: '20', intolerances: state.toString() },
                headers: {
                    'x-rapidapi-key': '0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6',
                    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };
            setLoading(true);
            setSearchResult([]);
            Axios.request(options).then(function (response) {
                setLoading(false);
                const res = response.data.map(name => name.name);
                setSearchResult(res);
            }).catch(function (error) {
                setLoading(false);
                console.error(error);
            });
        }
    }
    return (
        <Autocomplete
            freeSolo
            multiple
            size="small"
            id={id}
            options={searchResult}
            value={state}
            getOptionLabel={(option) => option}
            style={{ width: 300, margin: ".5rem 0" }}
            onChange={(e, value) => {
                onChange(value);
                setSearchResult([]);
            }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" onChange={(e) => getAutoCompleteResults(e.target.value)} />
            )}
            loading={loading}
            ChipProps={
                { style: { borderRadius: "5px" } }
            }
        />
    )
}
