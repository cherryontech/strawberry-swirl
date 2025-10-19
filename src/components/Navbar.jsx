import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4 py-4 bg-rose-100 shadow">
      <NavLink to={"/"}>
        <button className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition cursor-pointer">
          Home
        </button>
      </NavLink>
      <NavLink to={"/resources"}>
        <button className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition cursor-pointer">
          Resources
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
