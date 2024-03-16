import React from "react";
const SingleRecipe = ({ recipe, handleCart }) => {
  console.log(handleCart);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-black p-5">
        <figure>
          <img src={recipe.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{recipe.title}</h2>
          <p className="border-b-2 border-black">{recipe.description}</p>
          <div className="ingredients">
            <h2 className="card-title ">
              Ingredients {recipe.ingredients.length}
            </h2>
            <ul className="border-b-2 border-black">
              <li>{recipe.ingredients[0]}</li>
              <li>{recipe.ingredients[1]}</li>
              <li>{recipe.ingredients[2]}</li>
              <li>{recipe.ingredients[3]}</li>
              <li>{recipe.ingredients[4]}</li>
              <li>{recipe.ingredients[5]}</li>
            </ul>
            <p></p>
          </div>
          <div className="time flex justify-between">
            <h2>{recipe.preparing_time} min</h2>
            <h2>{recipe.calories} Calories</h2>
          </div>
          <div className="card-actions">
            <button
              onClick={(e) => handleCart(recipe)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
