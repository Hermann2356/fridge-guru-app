<<<<<<< HEAD
import React from "react";
import {FaCheese} from "react-icons/fa";
import "../components_stylesheets/CategoryBox.css";

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
||||||| ea88012
=======
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
>>>>>>> 085a81a5c444f7316d3e7f2e16b1b8a2ef49ff3b
