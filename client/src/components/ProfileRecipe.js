import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { FaHeart } from "react-icons/fa";

// Import Style
import "../components_stylesheets/ProfileRecipe.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 355,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProfileRecipe({ recipe }) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} col-12`}>
      <CardHeader
        title={recipe.title}
        action={
          <IconButton
            aria-label="settings"
            style={{ fontSize: "1.2rem", color: "red" }}
          >
            <FaHeart />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={recipe.image}
        title={recipe.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
