import React, {useEffect} from 'react';
import { useParams } from "react-router";
import '../components_stylesheets/RecipeDescriptionPage.css'
import {search} from '../spoonacular/endpoints'
import Loading from "../components/Loading";
import {Link} from 'react-router-dom';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import RecipeDescriptionCard from "../components/RecipeDescriptionCard";

const useStyles = makeStyles((theme) => ({

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


function RecipeDescriptionPage (){

    const { ingredientId } = useParams();

    let [informationObj, setInformationObj] = React.useState({});
    let [ingredients, setIngredients] = React.useState([]);
    let [loading, setLoading] = React.useState(true);

    const classes = useStyles();
    const [directionExpanded, setDirectionExpanded] = React.useState(false);
    const [nutritionExpanded, setNutritionExpanded] = React.useState(false);
    const [ingredientExpanded, setIngredientExpanded] = React.useState(false);

    const handleDirectionExpandClick = () => {
        setDirectionExpanded(!directionExpanded);
    };

    useEffect(() =>{
        console.log(ingredientId);
        search.getRecipeInfo(ingredientId)
            .then(res => res.json())
            .then(results => {
                setInformationObj(results);
                setLoading(false);
            })
            .then(() =>{
                console.log(informationObj);
            });
    },[loading])

    if(loading){
        return (
            <Loading />
        )

    }
        return (

            <div className="container-fluid">
                <div className="row m-2 js col-12">
                    <div className="col-12"><h1>{informationObj.title}</h1></div>
                </div>
                <div className="row m-2">
                    <div className="col-12">
                        {/*font-awesome icons*/}
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span className="review"> Be the first to rate & review! </span>
                    </div>
                    <div className="row m-2">
                        <div className="col-12">
                            <i className="fa fa-apple fa-2x checked" aria-hidden="true"></i>
                            <span className="apple"> <strong>{informationObj.creditsText}</strong> </span>
                            <p className="source">Source: <a href={informationObj.sourceUrl}>Recipe Site Page Here....</a></p>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-12">
                            <p>
                                {informationObj.summary}
                            </p>
                        </div>
                    </div>
                </div>

                    <div className="row m-2">
                        <div className="col-1">
                         <span className="fa-stack">
                             <i className="fa fa-square-o fa-stack-2x"></i>
                             <i className="fa fa-heart-o fa-stack-1x"></i>
                         </span><br/><br/>
                         <span className="fa-stack">
                             <i className="fa fa-square-o fa-stack-2x"></i>
                             <i className="fa fa-pinterest fa-stack-1x red"></i>
                         </span><br/><br/>
                         <span className="fa-stack">
                             <i className="fa fa-square-o fa-stack-2x"></i>
                             <i className="fa fa-print fa-stack-1x"></i>
                         </span><br/><br/>
                         <span className="fa-stack">
                             <i className="fa fa-square-o fa-stack-2x"></i>
                             <i className="fa fa-ellipsis-h fa-stack-1x"></i>
                         </span><br/><br/>
                        </div>
                        <div className="col-6 image-container">
                            <img src={informationObj.image}
                                 alt="image"
                            />
                        </div>
                        <div className="col-4">
                            <div className="card w-150">
                                <div className="card-body">
                                    <h5>Total: {informationObj.readyInMinutes} mins</h5>
                                    <h5>Cooking Time: {informationObj.cookingMinutes} mins</h5>
                                    <h5>Prep Time: {informationObj.preparationMinutes} mins</h5>
                                    <h5>Servings: {informationObj.servings}</h5>
                                    <h5>Nutrition profile:</h5>
                                    <p><u>Low Carbohydrate</u></p>
                                    <p><u>Dairy-Free{informationObj.dairyFree?"Yes":"No"}</u></p>
                                    <p><u>Gluten-Free: {informationObj.glutenFree?"Yes":"No"}</u></p>
                                    <p><u>Vegan: {informationObj.vegan?"Yes":"No"}</u></p>
                                    <p><u>vegetarian: {informationObj.vegetarian?"Yes":"No"}</u></p>
                                    <span className="nutrition">Nutrition Info</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="row m-2 col-3">*/}
                    {/*    <div className="col-12 border-bottom ">*/}
                    {/*        <h2>Ingredients</h2>*/}
                    {/*        <p><i className="fa fa-check-square-o" aria-hidden="true"></i> 3 ounce 3 slices*/}
                    {/*            whole-wheat-bread</p>*/}
                    {/*        <p><i className="fa fa-check-square-o" aria-hidden="true"></i> 1 tablespoon olive oil</p>*/}
                    {/*        <p><i className="fa fa-check-square-o" aria-hidden="true"></i> 1 pepper to taste</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="row col-12 bottom-container">
                        <div className=" col-4 bottom-card">
                            <RecipeDescriptionCard
                                header="Description"
                                content={informationObj.instructions}
                            />
                        </div>
                        <div className=" col-4 bottom-card">
                            <RecipeDescriptionCard
                                header="Ingredients"
                                content={informationObj.extendedIngredients.map(ingredient => {
                                    return <p><i className="fa fa-check-square-o" aria-hidden="true"></i>{" " + ingredient.name}</p>
                                })}
                            />
                        </div>
                        <div className=" col-4 bottom-card">
                            <RecipeDescriptionCard
                                header="Nutrition"
                                content={
                                    [<p>Serving Size</p>,
                                        <p><strong>Per Serving:</strong></p>,
                                        <p>100 calories</p>,
                                        <p>Exchanges: 1 star</p>
                                    ]
                                }
                            />
                        </div>
                    </div>
            </div>

        )

}

export default RecipeDescriptionPage;