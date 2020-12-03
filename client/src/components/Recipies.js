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

            var unirest = require("unirest");

var response = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");

req.query({
	"minAlcohol": "0",
	"maxVitaminB2": "1000",
	"minVitaminB6": "0",
	"maxFolicAcid": "1000",
	"minCalories": "150",
	"excludeIngredients": "coconut, mango",
	"maxVitaminB6": "1000",
	"maxVitaminB1": "1000",
	"maxPotassium": "1000",
	"minPotassium": "0",
	"maxPhosphorus": "1000",
	"minVitaminE": "0",
	"maxSodium": "1000",
	"maxCarbs": "100",
	"minCholine": "0",
	"intolerances": "peanut, shellfish",
	"minIron": "0",
	"number": "10",
	"minCaffeine": "0",
	"maxFat": "100",
	"minVitaminB12": "0",
	"maxSaturatedFat": "50",
	"maxVitaminE": "1000",
	"maxIron": "1000",
	"maxFolate": "1000",
	"minCholesterol": "0",
	"minCarbs": "5",
	"minSugar": "0",
	"maxIodine": "1000",
	"maxCopper": "1000",
	"minFolate": "0",
	"maxCalories": "1500",
	"minZinc": "0",
	"minSodium": "0",
	"maxCalcium": "1000",
	"minMagnesium": "0",
	"maxVitaminC": "1000",
	"maxZinc": "1000",
	"minVitaminK": "0",
	"maxCaffeine": "1000",
	"minVitaminA": "0",
	"maxAlcohol": "1000",
	"minFiber": "0",
	"maxVitaminB5": "1000",
	"maxVitaminK": "1000",
	"minManganese": "0",
	"minFluoride": "0",
	"cuisine": "american",
	"minCalcium": "0",
	"minFolicAcid": "0",
	"minCopper": "0",
	"maxCholesterol": "1000",
	"minSaturatedFat": "0",
	"maxMagnesium": "1000",
	"minVitaminC": "0",
	"equipment": "pan",
	"maxVitaminB12": "1000",
	"offset": "0",
	"minVitaminB5": "0",
	"maxFiber": "1000",
	"minSelenium": "0",
	"minVitaminB2": "0",
	"maxSugar": "1000",
	"minFat": "5",
	"minVitaminB1": "0",
	"minVitaminD": "0",
	"maxManganese": "1000",
	"minPhosphorus": "0",
	"maxCholine": "1000",
	"maxFluoride": "1000",
	"includeIngredients": "onions, lettuce, tomato",
	"minIodine": "0",
	"query": "burger",
	"maxVitaminA": "5000",
	"minVitaminB3": "0",
	"type": "main course",
	"maxSelenium": "1000",
	"maxVitaminD": "1000",
	"minProtein": "5",
	"maxVitaminB3": "1000",
	"ranking": "2",
	"maxProtein": "100"
});

response.headers({
	"x-rapidapi-key": "0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});


response.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
            


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