import React from "react";
import { Input } from "reactstrap";

// component
import FilterRecipeItem from "./FilterRecipeItem";

// style
import "../components_stylesheets/FilterContent.css";

// Fake Data
import FakeRecipeItems from "../FakeData/FakeRecipeItem";

const FilterContent = ({ checkedItems }) => {
  // state variable to store list of recipe item from get request.
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    // send get request to api to fetch filter recepies.
    setRecipes(FakeRecipeItems);
  }, [checkedItems]);

  const handleChange = (e) => {
    const { value } = e.target;

    if (value !== "") {
      const filterList = recipes.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setRecipes(filterList);
    } else {
      setRecipes(FakeRecipeItems);
    }
  };

  return (
    <div className="row">
      <div className="search__input__wrapper  mx-auto">
        <Input placeholder="Search for recipes" onChange={handleChange} />
      </div>
      {recipes.map((item) => (
        <div className="col-4 my-2">
          <FilterRecipeItem title={item.title} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default FilterContent;
