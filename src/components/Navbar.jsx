import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
    <span className="font-semibold text-xl">Gadget Heaven</span>
        </div>
        <div className="space-x-4">
          <NavLink exact to="/" ClassName=" hover:text-yellow-500">Home</NavLink>
          <NavLink to="dashboard" ClassName="text-yellow-500">Dashboard</NavLink>
          <NavLink to="/listedProducts" ClassName="text-yellow-500">Products List</NavLink>
          <NavLink to="/stats" ClassName="text-yellow-500">Statistics</NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
