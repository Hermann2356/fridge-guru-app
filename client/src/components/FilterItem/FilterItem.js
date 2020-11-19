// Import Libraries
import React from "react";
import { Collapse, Card, CardBody } from "reactstrap";
import { FaChevronDown } from "react-icons/fa";

// Import Styles
import "./FilterItem.css";

// Import Res
import Chili from "../../assets/chili.png";

// Render Method
const FilterItem = () => {
  // State Values
  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle Filters
  const toggle = () => setIsOpen(!isOpen);

  const items = [
    "Chilli sauce",
    "Cinnamon",
    "Garlic powder",
    "Paprika",
    "Oregano",
    "Red pepper",
    "cumin",
    "cayenne",
    "thyme",
  ];

  return (
    <div className="filter__wrapper">
      <div
        className="filter__toggle d-flex align-items-center justify-content-between"
        onClick={toggle}
      >
        <div>
          <img src={Chili} alt="filter item image" className="filter__image" />
          <span className="filter__item__title ">Spices</span>
        </div>
        <div>
          <FaChevronDown className="" />
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="filter__dropdown py-2">
          {items.map((item) => {
            return (
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox"
                />
                <label class="form-check-label" for="checkbox">
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default FilterItem;
