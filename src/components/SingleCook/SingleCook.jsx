import PropTypes from "prop-types";
const SingleCook = ({ bookmark, handleAddCooking }) => {
  const { title, calories, preparing_time } = bookmark;
  return (
    <div className="bg-slate-500 p-4 m-4">
      {/* <h3 className="text-3xl">{title}</h3>
      <h3 className="text-3xl">{calories}</h3> */}
      <div className="overflow-x-auto flex">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            <tr>
              <th className="p-0">{}</th>
              <td className="p-0">{title}</td>
              <td>{preparing_time} minutes</td>
              <td>{calories} calories</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => handleAddCooking(title)}
          className="btn border-2 border-transparent text-black hover:bg-transparent hover:border-2 hover:border-[#0ce58a] hover:text-[#0ce58a] bg-[#0ce58a] rounded-[50px]"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

SingleCook.propTypes = {
  bookmark: PropTypes.object,
  handleAddCooking: PropTypes.func,
};
export default SingleCook;

// onClick={() => handleDelete(item.id)}
