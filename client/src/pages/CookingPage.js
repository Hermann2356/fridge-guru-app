import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Timer from "../components/Timer";
import Navbar from "../components/Navbar";
import {search} from "../spoonacular/endpoints";
import Loading from "../components/Loading";
import '../components_stylesheets/CookingPage.css';
import {Col} from "reactstrap";
import {makeStyles} from "@material-ui/core/styles";

function Ingredient(props) {
    console.log(props.image)
    return (
        <Typography paragraph className="ingredient-typo">
           <i><img className="ingredient-img"
                   onError={(e)=>{
                       e.target.onerror = null; e.target.src="/public/assets/img-not-available.jpg"}
                   } src={"https://spoonacular.com/cdn/ingredients_100x100/" +props.image} /></i> {props.name}
        </Typography>
    )
}

function Step(props) {
    const useStyles = makeStyles((theme) => ({
       content: {
           backgroundColor: "whitesmoke",
       },
        cardContent: {
           textAlign: "center",
        }
    }));

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ingredients = props.instruction.ingredients.map((i, ii) => {
        return <Ingredient name={i.name} image={i.image} key={ii}/>;
    });

    return (
        <div className="step-div">
            <Card className={classes.content}>
                <CardHeader
                    title={props.instruction.name}
                />
                <CardContent  className={classes.cardContent}>
                    <Typography variant="body2" color="white " component="p">
                        {props.instruction.step}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton
                        id="expand-icon"
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Ingredients Needed"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent id="ingredients-content">
                        <Typography paragraph>Ingredients Needed:</Typography>
                        {ingredients}
                    </CardContent>
                </Collapse>
            </Card>
        </div>

    );
}

function SideBar(props) {
    const ingredientMeasurements = props.measurements.map((measurement, ii) => {
        return <li key={ii}><i className="fa fa-check-square-o" aria-hidden="true"></i>{" " + measurement}</li>
    });

    return (
        <div id=" row col-12 side-bar-div">
            <div className="col-12" id="ingredients-side-bar">

                <div className="scrollable-content">
                    <h3>Ingredients</h3>
                   <ul className="ingredient-list">
                       {ingredientMeasurements}
                   </ul>
               </div>

            </div>
        </div>
    );
}

class CookingPage extends React.Component {
    state = {
        title: "",
        recipe: null,
        steps: [],
        ingredientMeasurement: [],
        loading: true,

    }


    componentDidMount() {
        let ingredientId = this.props.match.params.id;
        console.log(ingredientId);
        search.getRecipeInfo(ingredientId)
            .then(res => {
                return res.json();
            })
            .then(info => {
                console.log(info)
                this.setState({
                    recipe: info,
                    steps: info.analyzedInstructions.map(i => {
                        return i.steps.map((s, ii) => {
                            let step = {
                                name: i.name,
                                step: s.step,
                                ingredients: s.ingredients,
                                equipment: s.equipment
                            }
                            return <Step instruction={step} key={ii}/>;
                        });
                    }),
                    ingredientMeasurement: info.extendedIngredients.map(ingredient => {
                        return ingredient.original;
                    }),
                    loading: false,
                });
            })
            .catch(err => {
                console.log(err)
            });
    };


    render() {
        let loading = this.state.loading;

        if(loading) {
            return (<div><Loading /></div>)
        }

        return (
            <div className="container-fluid cooking-container">
                <div className="row m2 col-12 cooking-nav-bar">
                    <Navbar timerActive={true}/>
                </div>
                <div className="row col-12 container-content">
                    <div className="col-8">
                        <h3 id="title">{this.state.recipe.title}</h3>
                        {this.state.steps}
                    </div>
                    <div className="col-4 ingredient-content">
                        <SideBar measurements={this.state.ingredientMeasurement}/>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-8">

                    </div>

                </div>
            </div>

        );
    }
}

export default CookingPage;