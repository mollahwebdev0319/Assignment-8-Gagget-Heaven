import { NavLink } from "react-router-dom";
const DashBoard = () => {
  return (
    <div className="p-4">
      <NavLink to="/listedProducts" className="btn btn-primary "><button>DashBoard</button> </NavLink>
    </div>
  );
};

export default DashBoard;
