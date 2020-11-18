// Import Libraries
import React from "react";

// Import Styles
import "./Home.css";

// Import Components
import Navbar from "../../components/Navbar/Navbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Newsfeed from "../../components/Newsfeed/Newsfeed";
import Rightbar from "../../components/Rightbar/Rightbar";

// Render Method
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row home__container">
        <div className="col-md-2 d-none d-md-block left__bar">
          <Leftbar />
        </div>
        <div className="col-12 col-md-7 offset-md-2 news__feed">
          <Newsfeed />
        </div>
        <div className="col-md-3 d-none d-md-block right__bar">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Home;
