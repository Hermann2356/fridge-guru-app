import React, { useState } from 'react';
import { Button, useTheme } from '@material-ui/core';
import { FilterDialog } from "./FilterDialog";


const Search = ({ value, handleSearch, handleFilters }) => {
    const theme = useTheme();
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const initialFilters = {
        time: [0, 60],
        ingredientsCount: [0, 10],
        includeIngredients: [],
        excludeIngredients: [],
        intolerances: [],
        nutritionFilters: {
            minCal: "",
            maxCal: "",
            minPro: "",
            maxPro: "",
            minFats: "",
            maxFats: "",
            minCarbs: "",
            maxCarbs: "",
        }
    };
    const [filters, setFilters] = useState(initialFilters);



    const handleChange = (evt) => {
        // console.log(evt.target.value)
        // setYoo(evt.target.value);

        setSearch(evt.target.value)
        console.log(search)


    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
        setFilters(initialFilters);
        handleSearch(search)
    }
    const clearFilters = () => {
        setFilters(initialFilters);
        handleFilters(initialFilters, value);
        setIsOpen(false);
    }

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline" onSubmit={handleSubmit}>
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search For food"
                        aria-label="Search"
                        value={search}
                        name="search"
                        onChange={handleChange}
                    />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <Button variant="outlined" color="default" onClick={() => setIsOpen(true)}>
                    Filter
                </Button>
                <FilterDialog isOpen={isOpen} setIsOpen={setIsOpen} filters={filters} setFilters={setFilters} value={value} handleFilters={handleFilters} clearFilters={clearFilters} />

            </nav>

        </div>
    )

    // return (
    //     <input value = {yoo} name="search" onChange={handleChange} />

    // )


}

export default Search