import React from "react";
import "../components_stylesheets/Newsfeed.css";
import CreatePostBox from "./CreatePostBox";
import CreatePostModal from "./CreatePostModal";
import Post from "./Post";

function Newsfeed (props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("open");
    setIsOpen(true);
  };

  const handleClickClose = () => {
    console.log("close");
    setIsOpen(false);
  };

  return (
    <div className="w-100 news-container">
      <div className="clearfix"></div>
        <div>
            <CreatePostBox onClick={handleClickOpen} />
            <CreatePostModal onClose={handleClickClose} isOpen={isOpen} />
        </div>
      {/*<FoodCategory />*/}
      <div className="col-md-6 col-12 post__bar">
          <Post image="https://specials-images.forbesimg.com/imageserve/5f748b1a267da47f7b3c2dfa/960x0.jpg?cropX1=0&cropX2=1252&cropY1=155&cropY2=1094" />
          <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
          <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
          <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
          <Post image="https://spoonacular.com/application/frontend/images/food-api/dough.jpg" />
      </div>
    </div>
  );
};

export default Newsfeed;
