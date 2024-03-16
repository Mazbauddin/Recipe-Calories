const Banner = () => {
  return (
    <div className="container mx-auto banner-part p-40">
      <h1 className="font-bold text-6xl text-white pb-8 text-center">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-[20px] text-white text-center pb-10">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="mx-auto text-center">
        <button className="btn border-2 border-white px-5 py-3 rounded-[50px] text-white hover:bg-green-400 hover:border-transparent hover:text-black mr-8">
          Get Started
        </button>
        <button className="btn border-2 border-white px-5 py-3 rounded-[50px] text-white hover:bg-green-400 hover:border-transparent hover:text-black mr-8 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
