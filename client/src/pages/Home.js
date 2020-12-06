import React from "react";
import "../components_stylesheets/Home.css";
import NavBar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Newsfeed from "../components/Newsfeed";
import Rightbar from "../components/RightBar";
import FilterItem from "../components/FilterItem";
import FilterContent from "../components/FilterContent";

const Home = () => {
  const [isFiltering, setIsFiltering] = React.useState(false);
  const [checkedItems, setCheckedItems] = React.useState([]);

  React.useEffect(() => {
    if (checkedItems.length > 0) {
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
  }, [checkedItems]);

  return (
    <div>
      <NavBar />
      <div className="row mx-0">
        <div className="col-12">
          <div className="row">
            <div className="col-3 p-0 m-0 mt-5 d-none d-md-block left__bar">
              <Leftbar
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            </div>
            <div className="col-md-6 col-12 offset-md-3 news__feed">
              {!isFiltering ? (
                <Newsfeed />
              ) : (
                <FilterContent checkedItems={checkedItems} />
              )}
            </div>
            <div className="col-3 d-none d-md-block right__bar">
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
