import React from "react";
import CategoryBox from "../CategoryBox/CategoryBox";

import "./FoodCategory.css";

function FoodCategory() {
  const ref = React.useRef(null);

  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };

  return (
    <div className="food__container" ref={ref}>
      <button onClick={() => scroll(120)}>scroll</button>
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
  );
}

export default FoodCategory;
