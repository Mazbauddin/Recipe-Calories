import PropTypes from "prop-types";
import SingleCook from "../SingleCook/SingleCook";

const CookSides = ({ cookSides, handleAddCooking }) => {
  return (
    <div className="">
      <div>
        <h1 className="text-[24px] font-bold text-center mb-8">
          Want to cook: <span>{cookSides.length}</span>
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="p-0"></th>
              <th className="pl-4">Name</th>
              <th className="pl-4">Time</th>
              <th className="pl-4">Calories</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {cookSides.map((bookmark, index) => (
          <SingleCook
            key={index}
            bookmark={bookmark}
            handleAddCooking={handleAddCooking}
          ></SingleCook>
        ))}
      </div>
      {/* cooking add */}
      <div>
        <h1 className="text-[24px] font-bold text-center mb-8">
          Currently cooking: <span>0</span>
        </h1>
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
        </table>
      </div>
    </div>
  );
};

CookSides.propTypes = {
  cookSides: PropTypes.array,
  handleAddCooking: PropTypes.func,
};
export default CookSides;

// handleAddCooking: PropTypes.func
