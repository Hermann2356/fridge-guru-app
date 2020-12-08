import React, {useEffect} from 'react';
import {useParams} from "react-router";
import '../components_stylesheets/RecipeDescriptionPage.css'
import {search} from '../spoonacular/endpoints'
import Loading from "../components/Loading";
import Navbar from '../components/Navbar'
import {makeStyles} from "@material-ui/core/styles";
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

function IngredientBox (props){
    return (
        <span className="span" style={{margin: '20px'}}>
            <div  className=" col-3 ingredients-list-inline">
                <i><img
                        onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/public/assets/img-not-available.jpg"
                            }
                        }
                        src={"https://spoonacular.com/cdn/ingredients_100x100/" + props.ingredient.image}
                    /><br/>
                </i>
            </div>
           <p>{props.ingredient.name}</p>
        </span>
        );

}

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
                <div className="row col-4 ">
                    <div className="row col-12 recipe-des-title theme ">
                        <div className="row col-12 h-100 ">
                            <h3 className="title">{informationObj.title}</h3>
                            <div className="row col-12">
                                <span className="apple"> <strong>{informationObj.creditsText}</strong> </span>
                                <span>Source: <a target="_blank" rel="noopener noreferrer"
                                                 href={informationObj.sourceUrl}>Recipe Site Page Here....</a>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className=" row col-12 strong-theme recipe-des-cooking theme">
                        <div className="row  col-12">
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
                <div className=" row col-8 recipe-des-image">
                    <img src={informationObj.image}
                         alt="image"
                         className="theme"
                    />
                </div>
                <div className="row col-4 ">
                    <div className="row col-12 strong-theme recipe-des-cooking recipe-des-summary theme">
                        <div className="row col-12">
                            <p><strong>Health Score:</strong>( {" " + informationObj.healthScore}/5)</p>

                        </div>
                        <div className="row col-12">
                            <p><strong>Dairy Free:</strong> {" " + informationObj.dairyFree?"YES":"NO"}</p>

                        </div>
                        <div className="row col-12">
                            <p><strong>Gluten Free:</strong> {" " + informationObj.glutenFree?"YES":"NO"}</p>
                        </div>
                        <div className="row col-12">
                            <p><strong>Vegan:</strong> {" " + informationObj.vegan?"YES":"NO"}</p>
                        </div>
                        <div className="row col-12">
                            <p><strong>Vegetarian:</strong>{" " + informationObj.vegetarian?"YES":"NO"}</p>
                        </div>
                    </div>

                </div>
                <div className="row col-8 ">
                    <div className="w-100 recipe-des-summary theme">
                        <h3 className="des-header">Description</h3>
                        <p>
                            <p className="content-padding" dangerouslySetInnerHTML={{__html: informationObj.summary}}/>
                        </p>
                    </div>
                </div>
                <div className="row col-6 ingredient-col margin-bottom">
                    <div className="w-100 recipe-des-summary theme">
                        <h3 className="des-header w-100">Ingredients</h3>
                        <div className="row col-12">
                            {informationObj.extendedIngredients.map(ingredient => {
                                return <IngredientBox ingredient={ingredient} />
                        //         return <span style={{margin: '20px'}}><div className="ingredients-list-inline"><i><img
                        //             onError={(e) => {
                        //                 e.target.onerror = null;
                        //                 e.target.src = "/public/assets/img-not-available.jpg"
                        //             }
                        //             }
                        //             src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image}/><br/></i> {ingredient.name}</div>
                        // </span>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row m2 col-6 ingredient-col margin-bottom ">
                    <div className="w-100 recipe-des-summary theme">
                        <h3 className="des-header">Directions</h3>
                        <div className="row col-12 ">
                            <p className="content-padding">{informationObj.instructions}</p>
                        </div>
                        <div className="row col-12 start-cooking-btn">
                            <div className={"button-form"}>
                                <Link to={"/recipe/cooking" + informationObj.id}>
                                    <Button type={"submit"} color="primary">
                                        Start Cooking
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    )

}

export default RecipeDescriptionPage;