// Import Libraries
import React from "react";
import { Collapse, Card, CardBody } from "reactstrap";
import { FaChevronDown } from "react-icons/fa";
import "../components_stylesheets/FilterItem.css";
import Chili from "../assets/chili.png";

const FilterItem = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { category, image, ingredients, checkedItems, setCheckedItems } = props;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheck = (e) => {
    const { name } = e.target;

    // check if item exist in array
    const isExist = checkedItems.includes(name);

    if (!isExist) {
      // add item to array
      setCheckedItems([...checkedItems, name]);
    } else {
      // remove item from array
      const filterItem = checkedItems.filter((item) => item !== name);
      setCheckedItems(filterItem);
    }
  };

  return (
    <div className="filter__wrapper">
      <div
        className="filter__toggle d-flex align-items-center justify-content-between"
        style={{
          background: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.35)
        ),
        url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={toggle}
      >
        <div>
          {/* <img src={Chili} alt="filter item image" className="filter__image" /> */}
          <span className="filter__item__title ">{category}</span>
        </div>
        <div>
          <FaChevronDown />
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="filter__dropdown py-2">
          {ingredients.map((item) => {
            return (
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox"
                  onChange={handleCheck}
                  name={item}
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
