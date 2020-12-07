import React, {useEffect} from 'react';
import {useParams} from "react-router";
import '../components_stylesheets/RecipeDescriptionPage.css'
import {search} from '../spoonacular/endpoints'
import Loading from "../components/Loading";
import Navbar from '../components/Navbar'
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import RecipeDescriptionCard from "../components/RecipeDescriptionCard";
import {Link} from "react-router-dom";

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

        <div className="container-fluid recipe-description-container">
            <Navbar className="recipe-description-nav"/>
            <div className="row m-2">
                <div className=" row col-12 recipe-description-title">
                    <div className="col-4"><h1>{informationObj.title}</h1></div>
                    <div className="col-4">
                        {/*font-awesome icons*/}
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span className="review"> Be the first to rate & review! </span>
                    </div>
                    <div className="col-4">

                        <span className="apple"> <strong>{informationObj.creditsText}</strong> </span>
                        <p className="source">Source: <a target="_blank" rel="noopener noreferrer"
                                                         href={informationObj.sourceUrl}>Recipe Site Page Here....</a>
                        </p>
                    </div>
                </div>

            </div>

            <div className="row m-2">

                <div className="row m-2">

                </div>
                <div className="row m-2">
                    <div className="col-10 recipe-description-summary">
                        <p>
                            {informationObj.summary}
                        </p>
                    </div>
                </div>
            </div>

            <div className="row m-2 mid-row-container">
                <div className="col-1 icon-container">
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

                    <div className=" row card w-150  cook-time-container">
                        <Link to="/recipe/cooking/">
                            <div className="card-body col-12">
                                <p><strong>Total:</strong> {informationObj.readyInMinutes} mins</p>
                                <p><strong>Cooking Time:</strong> {informationObj.cookingMinutes} mins</p>
                                <p><strong>Prep Time:</strong> {informationObj.preparationMinutes} mins</p>
                                <p><strong>Servings:</strong> {informationObj.servings}</p>
                            </div>
                        </Link>
                        <div>
                            <h5>_______________</h5>
                            <p><strong>Low Carbohydrate</strong></p>
                            <p><strong>Dairy-Free:</strong>{informationObj.dairyFree ? "Yes" : "No"}</p>
                            <p><strong>Gluten-Free: </strong>{informationObj.glutenFree ? "Yes" : "No"}</p>
                            <p><strong>Vegan:</strong>{informationObj.vegan ? "Yes" : "No"}</p>
                            <p><strong>vegetarian:</strong>{informationObj.vegetarian ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>

            </div>
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
                            return <p><i className="fa fa-check-square-o" aria-hidden="true"></i>{" " + ingredient.name}
                            </p>
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