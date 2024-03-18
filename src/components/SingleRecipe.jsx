// import React from "react";
// import { IoMdTime } from "react-icons/io";
// import { FaFire } from "react-icons/fa";
// const SingleRecipe = ({ recipe, handleCart }) => {
//   console.log(handleCart);
//   return (
//     <div>
//       <div className="card bg-base-100 shadow-xl border-2 border-[#878787] p-5">
//         <figure>
//           <img
//             src={recipe.image}
//             className="h-[250px] w-full rounded-[16px]"
//             alt=""
//           />
//         </figure>
//         <div className="">
//           <h2 className="card-title text-[20px] font-semibold mt-5">
//             {recipe.title}
//           </h2>
//           <p className="border-b-2 border-black mt-3 pb-5 text-[#878787] text-base">
//             {recipe.description}
//           </p>
//           <div className="ingredients">
//             <h2 className="card-title mt-10 pb-3">
//               Ingredients {recipe.ingredients.length}
//             </h2>
//             <ul className="border-b-2  border-black list-disc ingredients-list text-base text-[#878787]">
//               <li>{recipe.ingredients[0]}</li>
//               <li>{recipe.ingredients[1]}</li>
//               <li>{recipe.ingredients[2]}</li>
//               <li>{recipe.ingredients[3]}</li>
//               <li>{recipe.ingredients[4]}</li>
//               <li>{recipe.ingredients[5]}</li>
//             </ul>
//             <p></p>
//           </div>
//           <div className="time flex justify-between my-5">
//             <h2 className="text-[#878787] flex items-center">
//               <span className="mr-2">
//                 <IoMdTime></IoMdTime>
//               </span>
//               {recipe.preparing_time} minutes
//             </h2>
//             <h2 className="text-[#878787] flex items-center">
//               <span className="mr-2">
//                 <FaFire></FaFire>
//               </span>
//               {recipe.calories} calories
//             </h2>
//           </div>
//           <div className="card-actions">
//             <button
//               onClick={(e) => handleCart(recipe)}
//               className="btn border-2 border-transparent text-black hover:bg-transparent hover:border-2 hover:border-[#0ce58a] hover:text-[#0ce58a] bg-[#0ce58a] rounded-[50px]"
//             >
//               Want to Cook
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleRecipe;
