// Import Libraries
import React from "react";
import { BsBell } from "react-icons/bs";
import { Input } from "reactstrap";

// Import Styles
import "./Rightbar.css";

// Import Components
import FilterItem from "../FilterItem/FilterItem";

// Render Method
const Rightbar = () => {
  return (
    <div className="right__bar_container">
      <div className="clearfix"></div>
      <div className="d-flex justify-content-end mt-2">
        <BsBell className="notification__button" />
      </div>
      <div className="search__input__container">
        <Input className="search__input" placeholder="Search for recipes" />
      </div>
      <div className="ingridients__container">
        {/* <h5>Top Ingridients</h5>
        <div className="d-flex justify-content-around align-items-center">
          <div className="bottom__ingridient d-flex align-items-center justify-content-center meat__ingridient">
            <p>Meat</p>
          </div>
          <div className="bottom__ingridient d-flex align-items-center justify-content-center fish__ingridient">
            <p>Fish</p>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="bottom__ingridient d-flex align-items-center justify-content-center dairy__ingridient">
            <p>Dairy</p>
          </div>
          <div className="bottom__ingridient d-flex align-items-center justify-content-center grains__ingridient">
            <p>Grains</p>
          </div>
        </div> */}
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </div>
    </div>
  );
};

export default Rightbar;
