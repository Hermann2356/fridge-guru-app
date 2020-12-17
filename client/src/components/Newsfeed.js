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

      <div className="col-md-6 col-12 post__bar">
          <Post image="/public/assets/chicken-broccoli-pasta-post.jpg" />
          <Post image="/public/assets/dough-post.jpg" />
          <Post image="/public/assets/dough-post.jpg" />
          <Post image="/public/assets/dough-post.jpg" />
          <Post image="/public/assets/dough-post.jpg" />
      </div>
    </div>
  );
};

export default Newsfeed;
