import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {Card} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    cardAction: {
        width: 800,
        backgroundColor: "slategray",
        color: "whitesmoke"
    },
    expand: {
        transform: 'rotate(0deg)',
        float:"right",
        marginLeft:250,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function RecipeDescriptionCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="row m-2 col-12 description-card">
            <Card>
                <CardActions className={classes.cardAction} disableSpacing>
                    {/*<div className="col-12 border-bottom">*/}
                    <h6>{props.header}</h6>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    {/*</div>*/}
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>{props.content}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default RecipeDescriptionCard;