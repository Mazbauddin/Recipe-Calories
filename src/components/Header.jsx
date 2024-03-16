const Header = () => {
  return (
    <div className="container bg-purple-500 py-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12  justify-between items-center">
        <div className="logo col-span-3">
          <h1 className="text-4xl font-bold text-[#150B2B] ">
            Recipe Calories
          </h1>
        </div>
        <div className="navbar col-span-6 font-normal text-lg">
          <ul className="flex">
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
        <div className="search col-span-3">
          <input
            className="rounded-2xl p-2 mr-5 bg-[#dadafa]"
            type="text"
            placeholder="Search"
          />
          <button className="bg-green-700 p-2 rounded-full">O</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
