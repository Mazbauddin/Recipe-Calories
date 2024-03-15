import { useEffect } from "react";
import { useState } from "react";

const Recipe = () => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Recipe;
