import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container py-8 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-10">
                <a className="hover:text-red-500" href="#">
                  Home
                </a>
              </li>
              <li className="px-10">
                <a href="#">Recipes</a>
              </li>
              <li className="px-10">
                <a href="#">About</a>
              </li>
              <li className="px-10">
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="px-10">
              <a className="hover:text-[#0ce58a]" href="#">
                Home
              </a>
            </li>
            <li className="px-10">
              <a className="hover:text-[#0ce58a]" href="#">
                Recipes
              </a>
            </li>
            <li className="px-10">
              <a className="hover:text-[#0ce58a]" href="#">
                About
              </a>
            </li>
            <li className="px-10">
              <a className="hover:text-[#0ce58a]" href="#">
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end search">
          <FaSearch className="search-icon  hidden lg:flex" />
          <input
            className="rounded-2xl py-3 pl-10 mr-5 bg-[#dadafa] hidden lg:flex"
            type="text"
            placeholder="Search"
          />
          <button className="bg-[#0ce58a] p-2 text-[30px] rounded-full">
            <FaRegUserCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
