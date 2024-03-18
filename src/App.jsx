import Banner from "./components/Banner";
import Header from "./components/Header";

import { useState } from "react";
import "./App.css";
import CookSides from "./components/CookSides/CookSides";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [cookSides, setCookSides] = useState([]);

  // handle Button Delete
  const handleDeleteCook = (cook) => {
    const deleteCooking = cookSides.filter(
      (handleDeleteCook) => handleDeleteCook.id != cook.id
    );
    setCookSides(deleteCooking);
  };

  // handle add cook
  const handleAddCookSide = (recipe) => {
    const newCookSides = cookSides.find(
      (handleAddCookSide) => handleAddCookSide.id == recipe.id
    );
    if (!newCookSides) {
      setCookSides([...cookSides, recipe]);
      toast.success("Successfully Added Your Order");
    } else {
      toast.warn("Dish Preparing Do Not Add Another One");
    }
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="my-20 mx-5 lg:mx-0">
        <div className="heading text-center">
          <h1 className="text-[40px] font-semibold">Our Recipes</h1>
          <p className="text-center">
            Whether you are using a slow cooker, roasting, air frying, or
            marinating, <br />
            we have got a recipe for every occasion. Browse our recipes now!
          </p>
        </div>
        <div className="main-container grid grid-cols-1 lg:grid-cols-12 justify-between container mx-auto mt-20 gap-5">
          <div className="cards-container  col-span-12 lg:col-span-7">
            <div className="">
              <Recipes handleAddCookSide={handleAddCookSide}></Recipes>
            </div>
          </div>
          <div className="cart-container col-span-12 lg:col-span-5 shadow-xl border-2 border-[#878787] rounded-2xl p-5 h-full">
            <CookSides
              cookSides={cookSides}
              handleDeleteCook={handleDeleteCook}
            ></CookSides>
          </div>
        </div>
        <ToastContainer />
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
