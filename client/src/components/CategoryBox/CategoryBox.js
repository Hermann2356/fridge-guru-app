// Import Libraries
import React from "react";
import { FaCheese } from "react-icons/fa";

// Import Styles
import "./CategoryBox.css";

// Render Method
const CategoryBox = () => {
  return (
    <div className="d-inline-flex flex-column mx-2 text-center">
      <div className="d-flex flex-column justify-content-center category__box">
        <span className="category__icon px-1 pb-2">
          <FaCheese />
        </span>
      </div>
      <span className="category__title">Italian</span>
    </div>
  );
};

export default CategoryBox;
