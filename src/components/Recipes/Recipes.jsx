import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleAddCookSide }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between container mx-auto">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          handleAddCookSide={handleAddCookSide}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleAddCookSide: PropTypes.func,
};

export default Recipes;
