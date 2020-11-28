// Import Libraries
import React from "react";
import { Link } from "react-router-dom";
// Import Styles
import "../components_stylesheets/Leftbar.css";

// import component
import FilterItem from "./FilterItem";

// import FakeData
import FakeFilterItems from "../FakeData/FakeFilterItems";

// Render Method
const Leftbar = ({ checkedItems, setCheckedItems }) => {
  return (
    <div className="left__bar__container">
      <div className="clearfix"></div>

      <Link className="nav__link" to="/profile">
        <div className="left__bar__profile">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="user"
            className="left__bar__user__image"
          />
          <div className="username__container">
            <h5>Username</h5>
            <p>Lv.10</p>
          </div>
        </div>
      </Link>
      <div className="left__bar__top__options">
        <a href="#">Saved Recipes</a>
        <a href="#">Following</a>
        <a href="#">Recipe Drafts</a>
      </div>
      <div className="left__bar__bottom__options">
        {FakeFilterItems.map((item, i) => (
          <FilterItem
            key={i}
            category={item.name}
            ingredients={item.ingredients}
            image={item.image}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        ))}
      </div>
    </div>
  );
};
export default Leftbar;
