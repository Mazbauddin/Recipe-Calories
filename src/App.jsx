import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import SingleRecipe from "./components/SingleRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);

  const handleCart = (r) => {
    const isExist = cart.find((recipeSingle) => recipeSingle.id == r.id);
    if (!isExist) {
      setCart([...cart, r]);
    } else {
      alert("Already processing");
    }
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="main-container grid grid-cols-1 lg:grid-cols-12 justify-between container mx-auto">
        <div className="cards-container col-span-7">
          {recipes.map((recipeSingle) => (
            <SingleRecipe
              recipe={recipeSingle}
              handleCart={handleCart}
            ></SingleRecipe>
          ))}
        </div>
        <div className="cart-container col-span-5">
          <h1>Want to cook: 01</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
