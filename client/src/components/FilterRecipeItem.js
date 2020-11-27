import React from "react";

// material libs
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

// icons
import { MdFavorite, MdShare } from "react-icons/md";

import "../components_stylesheets/FilterRecipeItem.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const FilterRecipeItem = ({ title, image }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MdFavorite />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <MdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FilterRecipeItem;
