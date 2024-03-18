import PropTypes from "prop-types";
const SingleCook = ({ bookmark, handleAddCooking }) => {
  const { title, calories, preparing_time } = bookmark;
  return (
    <div className="bg-[#f8f8f8] p-5  mb-4 rounded-[16px]">
      {/* <h3 className="text-3xl">{title}</h3>
      <h3 className="text-3xl">{calories}</h3> */}
      <div className="flex justify-between items-center">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row  */}
            <tr className="border-b-0">
              <td className="p-0">{}</td>
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
