// Import Libraries
import React from "react";

// Import Styles
import "../components_stylesheets/Newsfeed.css";

// Import Components
import CreatePostBox from "./CreatePostBox";
import FoodCategory from "./FoodCategory";
import Post from "./Post";

// Render Method
const Newsfeed = () => {
  return (
    <div>
      <div className="clearfix"></div>
      <CreatePostBox />
      <FoodCategory />
      <Post image="https://specials-images.forbesimg.com/imageserve/5f748b1a267da47f7b3c2dfa/960x0.jpg?cropX1=0&cropX2=1252&cropY1=155&cropY2=1094" />
      <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
      <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
      <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
      <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
    </div>
  );
};

export default Newsfeed;