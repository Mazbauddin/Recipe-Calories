import Banner from "./components/Banner";
import Header from "./components/Header";

import { useState } from "react";
import "./App.css";
import CookSides from "./components/CookSides/CookSides";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cookSides, setCookSides] = useState([]);

  const handleAddCooking = (cook) => {
    const newCooking = [...cookSides, cook];
    setCookSides(newCooking);
  };

  // const handleAddCookSide = (recipe) => {
  //   const newCookSides = [...cookSides, recipe];
  //   setCookSides(newCookSides);
  // };

  // handle add cook
  const handleAddCookSide = (recipe) => {
    const newCookSides = cookSides.find(
      (handleAddCookSide) => handleAddCookSide.id == recipe.id
    );
    if (!newCookSides) {
      setCookSides([...cookSides, recipe]);
      toast.success("Successfully Added Your Order");
    } else {
      toast.warn("Once Added Do not Add");
    }
  };

  // button create now delete
  // Button Delete
  // const handleDelete = (id) => {
  //   const newCookSides = cookSides.filter((handleDelete) => handleDelete.id!= id);
  //   setCookSides(newCookSides);
  // };
  // const handleDelete = (id) => {
  //   const newCart = cookSides.filter((item) => item.id != id);
  //   setCookSides(newCart);
  // };

  // end
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      {/* <div className="md:flex container mx-auto">
        <Recipes></Recipes>
        <Bookmarks></Bookmarks>
      </div> */}
      <div className="my-20">
        <div className="heading text-center">
          <h1 className="text-[40px] font-semibold">Our Recipes</h1>
          <p className="text-center">
            Whether you are using a slow cooker, roasting, air frying, or
            marinating, <br />
            we have got a recipe for every occasion. Browse our recipes now!
          </p>
        </div>
        <div className="main-container grid grid-cols-1 lg:grid-cols-12 justify-between container mx-auto mt-20 gap-5">
          <div className="cards-container col-span-7">
            <div className="">
              <Recipes handleAddCookSide={handleAddCookSide}></Recipes>
            </div>
          </div>
          <div className="cart-container col-span-5 shadow-xl border-2 border-[#878787] rounded-2xl p-5 h-full">
            <CookSides
              cookSides={cookSides}
              handleAddCooking={handleAddCooking}
            ></CookSides>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
