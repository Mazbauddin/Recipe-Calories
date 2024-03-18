import PropTypes from "prop-types";
import SingleCook from "../SingleCook/SingleCook";

const CookSides = ({ cookSides, handleDeleteCook }) => {
  return (
    <div className="">
      <div>
        <h1 className="text-[24px] font-bold text-center mb-8">
          Want to cook: <span>{cookSides.length}</span>
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th className="p-0"></th>
              <th className="pl-4">Name</th>
              <th className="pl-4">Time</th>
              <th className="pl-4">Calories</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {cookSides.map((cookSingle, index) => (
          <SingleCook
            key={index}
            cookSingle={cookSingle}
            handleDeleteCook={handleDeleteCook}
          ></SingleCook>
        ))}
      </div>
      {/* cooking add */}
      <div className="mt-8">
        <h1 className="text-[24px] font-bold text-center mb-8">
          Currently cooking: <span>0</span>
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
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
  handleDeleteCook: PropTypes.func,
};

export default CookSides;
