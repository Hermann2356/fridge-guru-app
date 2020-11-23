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
import Timer from "../components/Timer";
import {Col, Container, Row} from "reactstrap";


function Ingredient(props) {
    return (
        <Typography paragraph className="ingredient-typo">
            {props.name}
        </Typography>
    )
}

function Step(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ingredients = props.instruction.ingredients.map((i, ii) => {
        return <Ingredient name={i.name} image={i.image} key={ii}/>;
    });

    return (
        <div className="step-div">
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
        return <li key={ii}>{measurement}</li>
    });

    return (
        <div id="side-bar-div">
            <div>
                <Timer/>
            </div>
            <div id="ingredients-side-bar">
                <h3>Ingredients</h3>
                <ul>
                    {ingredientMeasurements}
                </ul>
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
                    title: info.title,
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
            <Container fluid="lg" id="main">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <h3 id="title">{this.state.title}</h3>
                        {this.state.steps}
                    </Col>
                    <Col sm={4} md={4} lg={4}>
                        <SideBar measurements={this.state.ingredientMeasurement}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default CookingPage;