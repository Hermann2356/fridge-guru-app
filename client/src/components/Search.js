import React , {useState} from 'react';



const Search = ({value , handleSearch}) => {

    const [search , setSearch] = useState('');

    const handleChange = (evt) => {
        // console.log(evt.target.value)
        // setYoo(evt.target.value);
        
        setSearch(evt.target.value)
        console.log(search)
        

    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        handleSearch(search)
    }




    return(
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline" onSubmit = {handleSubmit}>
                    <input 
                    class="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search For food" 
                    aria-label="Search" 
                    value = {search}
                    name = "search"
                    onChange = {handleChange}
                    />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            
        </div>
    )

    // return (
    //     <input value = {yoo} name="search" onChange={handleChange} />

    // )

    
}

export default Search