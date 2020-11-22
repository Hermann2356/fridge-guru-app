import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {search} from "../spoonacular/endpoints";
import "../components_stylesheets/CookingPage.css";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 50,
    },
}));

function Ingredient(props) {
    return (
        <Typography paragraph>
          {props.name}
        </Typography>
    )
}

function Step(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ingredients = props.instruction.ingredients.map((i, ii) => {
        return <Ingredient name={i.name} image={i.image} key={ii}/>;
    })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Card>
                        <CardHeader
                            title={props.instruction.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.instruction.step}
                            </Typography>
                        </CardContent>


                        <CardActions disableSpacing>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="Ingredients Needed"
                            >
                                <ExpandMoreIcon/>

                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Ingredients Needed:</Typography>
                                {ingredients}
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

function SideBar(props) {
    const ingredientMeasurements = props.measurements.map(measurement => {
        return <li>{measurement}</li>
    });

    return (
        <div className="side-bar-div">
            <ul>
                {ingredientMeasurements}
            </ul>
        </div>
    );
}


class CookingPage extends React.Component {
    state = {
        recipe: null,
        steps: [],
        ingredientMeasurement: [],

    }


    componentDidMount() {
        search.getRecipeInfo(479101)
            .then(res => {
                return res.json();
            })
            .then(info => {

                let extendedIngredients = info.extendedIngredients.map(i => {
                    return
                })
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
                    })
                });
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={8}>
                        {this.state.steps}
                    </Grid>
                    <Grid item>
                        <SideBar measurements={this.state.ingredientMeasurement} />
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default CookingPage;