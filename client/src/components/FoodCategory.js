<<<<<<< HEAD
import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "../components_stylesheets/FoodCategory.css";
import CategoryBox from "./CategoryBox";


function FoodCategory({ categories }) {

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
                <FaChevronLeft/>
            </button>
            <div className="food__container " ref={ref}>
                { categories }
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
            </div>
            <button className="category__scroll" onClick={() => scrollRight(120)}>
                <FaChevronRight/>
            </button>
        </div>
    );

};

export default FoodCategory;
||||||| ea88012
=======
import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "../../../../../../Downloads/fridge-guru-app-master 3/client/src/components_stylesheets/FoodCategory.css";
import CategoryBox from "./CategoryBox";


function FoodCategory({ categories }) {

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
                <FaChevronLeft/>
            </button>
            <div className="food__container " ref={ref}>
                { categories }
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
            </div>
            <button className="category__scroll" onClick={() => scrollRight(120)}>
                <FaChevronRight/>
            </button>
        </div>
    );

};

export default FoodCategory;
>>>>>>> 085a81a5c444f7316d3e7f2e16b1b8a2ef49ff3b
