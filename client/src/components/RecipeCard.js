import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../components_stylesheets/Card.css'
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

export default function RecipeReviewCard({ cardData }) {


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(cardData, "card")
  return (
      <div className="card" >
        <Card >

         <Link to={`/recipe/description/${cardData.id}`} ><CardMedia
              className={classes.media}
              image={cardData.image}
              title={cardData.label}
         /></Link>
          <CardContent>

            <Typography variant="body2" color="textSecondary" component="p">
              <strong>{cardData.title}</strong>

            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Calories : {cardData.calories}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Cook Time : {cardData.readyInMinutes} mins
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <strong>Ingredients</strong>
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

          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {cardData?.ingredients?.map(ingredient => (
                  <Typography paragraph>
                    {ingredient.name}
                  </Typography>

              ))}
            </CardContent>
          </Collapse>

        </Card>
      </div>

  );
}