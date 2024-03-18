const Banner = () => {
  return (
    <div className="mx-5 lg:mx-0">
      <div className="container mx-auto banner-part  p-10 lg:p-40">
        <h1 className="font-bold text-3xl lg:text-6xl text-white pb-8 text-center">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className=" text-[16px] lg:text-[20px] text-white text-center pb-10">
          Cooking, also known as cookery or professionally as the culinary arts,
          is the art, science and craft of using heat to make food more
          palatable, digestible, nutritious, or safe. Cooking techniques and
          ingredients vary widely, from grilling food over an open fire, to
          using electric stoves, to baking in various types of ovens, reflecting
          local conditions.
        </p>
        <div className="mx-auto text-center">
          <button className=" mb-5 lg:mb-0 btn bg-transparent border-2 border-white px-5 py-3 rounded-[50px] text-white hover:bg-[#0ce58a] hover:border-transparent hover:text-black mr-8">
            Explore Now
          </button>
          <button className="btn  bg-transparent border-2 border-white px-5 py-3 rounded-[50px] text-white hover:bg-[#0ce58a] hover:border-transparent hover:text-black mr-8 ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
