import React from "react";
import {FaCheese} from "react-icons/fa";
import "../../../../../../Downloads/fridge-guru-app-master 3/client/src/components_stylesheets/CategoryBox.css";

function CategoryBox({categoryName, id}) {
    categoryName = "category name";
    return (
        <div className="d-inline-flex flex-column mx-2 text-center">
            <div className="d-flex flex-column justify-content-center category__box">
        <span className="category__icon px-1 pb-2">
          <FaCheese/>
        </span>
            </div>
            <span className="category__title">{categoryName}</span>
        </div>
    );
};

export default CategoryBox;
