import React, {useEffect} from 'react';
import {useParams} from "react-router";
import '../components_stylesheets/RecipeDescriptionPage.css'
import {search} from '../spoonacular/endpoints'
import Loading from "../components/Loading";
import Navbar from '../components/Navbar'
import {makeStyles} from "@material-ui/core/styles";
import { Button } from 'reactstrap';



function RecipeDescriptionPage() {

    const {ingredientId} = useParams();

    let [informationObj, setInformationObj] = React.useState({});
    let [ingredients, setIngredients] = React.useState([]);
    let [loading, setLoading] = React.useState(true);


    useEffect(() => {
        console.log(ingredientId);
        search.getRecipeInfo(ingredientId)
            .then(res => res.json())
            .then(results => {
                setInformationObj(results);
                setLoading(false);
            })
            .then(() => {
                console.log(informationObj);
            });
    }, [loading])

    if (loading) {
        return (
            <Loading/>
        )

    }
    return (

        <div className="container-fluid recipe-main-container">
            <div className="row m-2 col-12 w-100">
                <Navbar className="recipe-description-nav"/>
            </div>
            <div className="row m-2 col-12 w-100 recipe-des-body">
                <div className="col-4 w-100 ">
                    <div className="row col-12 recipe-des-title theme">
                        <h1>{informationObj.title}</h1>
                        <div className="row col-12">
                            <span className="apple"> <strong>{informationObj.creditsText}</strong> </span>
                            <p className="source">Source: <a target="_blank" rel="noopener noreferrer"
                                                             href={informationObj.sourceUrl}>Recipe Site Page Here....</a>
                            </p>
                        </div>
                    </div>

                    <div>

                    </div>
                    <div className="recipe-des-cooking theme">
                        <div className="row col-12">
                            <p><strong>Total Time:</strong> {informationObj.readyInMinutes} mins</p>

                        </div>
                        <div className="row col-12">
                            <p><strong>Cooking Time:</strong> {informationObj.cookingMinutes} mins</p>
                        </div>
                        <div className="row col-12">
                            <p><strong>Prep Time:</strong> {informationObj.preparationMinutes} mins</p>
                        </div>
                        <div className="row col-12">
                            <p><strong>Servings:</strong> {informationObj.servings}</p>
                        </div>
                    </div>


                </div>
                <div className="col-8 recipe-des-image">
                    <img src={informationObj.image }
                         alt="image"
                         className="theme"
                    />
                </div>
            </div>
            <div className="row m2 col-12 recipe-des-summary theme">
                <div className="col-12">
                    <p>
                        {informationObj.summary}
                    </p>
                </div>
            </div>
            <div className="row m2 col-12 w-100 ingredients-des-container">
                <div className="row col-12 w-100 ">
                    <div className="row col-6 w-100 ingredient-des-props theme">
                        <div className="row m2 col-12 ingredient-title">
                            <h3>Ingredients</h3>
                        </div>
                        {informationObj.extendedIngredients.map(ingredient => {
                            return <span style={{margin: '20px'}} ><div className="ingredients-list-inline"><i><img onError={(e)=>{
                                e.target.onerror = null; e.target.src="/public/assets/img-not-available.jpg"}
                            } src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image} /><br/></i> {ingredient.name}</div>
                        </span>
                        })}
                    </div>

                    <div className=" row col-6 w-100 theme ingredient-des-props">
                        <div className="row col-12">
                            <div>
                                <h3>Directions</h3>
                                {informationObj.instructions}
                            </div>
                            <div className="col-3 start-cooking-btn">
                                <form method="get" action={"/recipe/cooking" + informationObj.id}>
                                    <Button  type={"submit"} color="primary">Start Cooking</Button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default RecipeDescriptionPage;