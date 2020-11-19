
import React from "react";
import { BsBell } from "react-icons/bs";
import { Input } from "reactstrap";
import "../components_stylesheets/RightBar.css";
import FilterItem from "./FilterItem";

class Rightbar extends React.Component {
    render() {
        return (
            <div className="right__bar_container">
                <div className="clearfix"></div>
                <div className="d-flex justify-content-end mt-2">
                    <BsBell className="notification__button"/>
                </div>
                <div className="search__input__container">
                    <Input className="search__input" placeholder="Search for recipes"/>
                </div>
                <div className="ingredients__container">
                    {/* <h5>Top Ingredients</h5>
        <div className="d-flex justify-content-around align-items-center">
          <div className="bottom__ingredient d-flex align-items-center justify-content-center meat__ingridient">
            <p>Meat</p>
          </div>
          <div className="bottom__ingredient d-flex align-items-center justify-content-center fish__ingridient">
            <p>Fish</p>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="bottom__ingredient d-flex align-items-center justify-content-center dairy__ingridient">
            <p>Dairy</p>
          </div>
          <div className="bottom__ingredient d-flex align-items-center justify-content-center grains__ingridient">
            <p>Grains</p>
          </div>
        </div> */}
                    <FilterItem/>
                </div>
            </div>
        );
    }
}

export default Rightbar;
