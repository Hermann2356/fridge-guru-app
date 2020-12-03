import React , { useState, useEffect} from 'react';
import Recipiecard from '../components/Recipiecard'
import axios from 'axios'
import Skeletoncom from '../components/Skeleton'
import Search from '../components/Search'
import FiltersBar from '../components/FiltersBar'


 


const Recipies = () => {

    var [data , setData] = useState([])
    var [filterData , setFilterData] = useState([])
    const [value , setValue] = useState('burger')
    const [cal , setCal] = useState( {
            minCal : '0',
            maxCal  : '10000'
    })

   

    const getResults = async (query) =>{

        let giveResponse

        try{

            const response = await axios.post(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch=${query}&app_id=d13b1294&app_key=0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6=${cal.includeIngredients}-${cal.excludeIngredients.}`)
            console.log(response)
            
            giveResponse = response.data.hits
            


        }catch(err){
            console.log(err)
        }


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



    let  handleFilters = async  (filters) => {

       

        // console.log(filters)

        if(filters.pro.minPro > 0 || filters.pro.maxPro > 0  ){

                let newData = []

                newData =  await data.filter(subData => {
                    let minPro = filters.pro.minPro , maxPro = filters.pro.maxPro , minCarbs = filters.carbs.minCarbs , maxCarbs = filters.carbs.maxCarbs , minFats = filters.fats.minFats  , maxFats = filters.fats.maxFats
                    if(subData.recipe.totalDaily.PROCNT.quantity >= Number(minPro) && subData.recipe.totalDaily.PROCNT.quantity <= Number(maxPro) && subData.recipe.totalDaily.CHOCDF.quantity >= Number(minCarbs) && subData.recipe.totalDaily.CHOCDF.quantity <= Number(maxCarbs) && subData.recipe.totalDaily.FAT.quantity >= Number(minFats) && subData.recipe.totalDaily.FAT.quantity <= Number(maxFats) ){
                        return true
                    }
                })

                console.log(newData)
                await setFilterData(newData)
                console.log(filterData)
                console.log(data)

        }

        

        

    }


      useEffect(() => {
        getResults(value)


    } , [value , cal ])

    return(
        <div className='container-fluid' >
            <div className='row' >
                {
                    console.log(cal)
                }
                
                <div className = "col-12 col-md-3" >
                <br />
                <br />
                <h3>Filters </h3>
                
                    <FiltersBar handleCalories = {handleCalories} handleFilters = {handleFilters} />
                    
                </div>
                
                <div className = "col-12 col-md-9" >
                <br />
                <br />
                    <Search value = {value} handleSearch = {handleSearch} />
                    <br />
                    <br />
                    {
                        filterData ? <div className = "row" >

                        
                        {filterData.map((subData) => (

                        <div className = "col-12 col-md-6 col-lg-4" >
                            <Recipiecard cardData = {subData.recipe} />
                            
                        </div> 
                            // console.log(subData.recipe)
                            
                            
                        ))}

                </div> : <Skeletoncom />
                    }
                    
                   

                </div>
                
            </div>

        </div>
    )

}



export default Recipies