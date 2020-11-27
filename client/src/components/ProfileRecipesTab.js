// Import Libraries
import React from "react";

// Import Component
import ProfileRecipe from "./ProfileRecipe";

// Import Data
import RECIPES from "../FakeData/recipes";

const ProfileRecipesTab = () => {
  return (
    <div className="row col-12 w-100 m-0 p-0">
      {RECIPES.map((recipe, index) => {
        return (
          <div className="col-6 col-md-3 m-0 p-2" key={index}>
            <ProfileRecipe recipe={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileRecipesTab;
