// Import Libraries
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Styles
import "./FoodCategory.css";

// Import Components
import CategoryBox from "../CategoryBox/CategoryBox";

// Render Method
const FoodCategory = () => {
  const ref = React.useRef(null);

  // Function To Handle Scroll Right
  const scrollRight = (offset) => {
    ref.current.scrollLeft += offset;
  };

  // Function To Handle Scroll Left
  const scrollLeft = (offset) => {
    ref.current.scrollLeft -= offset;
  };

  return (
    <div className="d-flex align-items-center food__wrapper">
      <button className="category__scroll" onClick={() => scrollLeft(120)}>
        <FaChevronLeft />
      </button>
      <div className="food__container " ref={ref}>
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
      </div>
      <button className="category__scroll" onClick={() => scrollRight(120)}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default FoodCategory;
