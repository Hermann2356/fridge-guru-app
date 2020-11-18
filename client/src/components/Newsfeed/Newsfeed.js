// Import Libraries
import React from "react";

// Import Styles
import "./Newsfeed.css";

// Import Components
import CreatePostBox from "../CreatePostBox/CreatePostBox";
import FoodCategory from "../FoodCategory/FoodCategory";
import Post from "../Post/Post";

// Render Method
const Newsfeed = () => {
  return (
    <div>
      <div className="clearfix"></div>
      <CreatePostBox />
      <FoodCategory />
      <Post image="https://specials-images.forbesimg.com/imageserve/5f748b1a267da47f7b3c2dfa/960x0.jpg?cropX1=0&cropX2=1252&cropY1=155&cropY2=1094" />
      <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
    </div>
  );
};

export default Newsfeed;
