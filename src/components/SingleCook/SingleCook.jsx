import PropTypes from "prop-types";
const SingleCook = ({ cookSingle, handleDeleteCook }) => {
  const { title, calories, preparing_time } = cookSingle;
  return (
    <div className="bg-[#f8f8f8] p-5  mb-4 rounded-[16px]">
      <div className="flex justify-between items-center">
        <table className="table">
          <tbody>
            <tr className="border-b-0 text-[14px]">
              <td className="p-0">{}</td>
              <td className="p-0">{title}</td>
              <td>{preparing_time} minutes</td>
              <td>{calories} calories</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => handleDeleteCook(cookSingle)}
          className="btn border-2 border-transparent text-black hover:bg-transparent hover:border-2 hover:border-[#0ce58a] hover:text-[#0ce58a] bg-[#0ce58a] rounded-[50px]"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

SingleCook.propTypes = {
  cookSingle: PropTypes.object,
  handleDeleteCook: PropTypes.func,
};

export default SingleCook;
