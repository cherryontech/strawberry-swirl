import { NavLink } from "react-router";

const Navbar = () => {
  const username = localStorage.getItem("userName");

  return (
    <header className="w-full bg-white px-10 py-8 mb-8 rounded-3xl shadow-md flex justify-between items-center">
      <h1 className="text-bordeaux">Hi {username}!</h1>

      <nav className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "text-deepOrange font-bold" : "text-bordeaux") +
            " text-h6"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/jobtracking"
          className={({ isActive }) =>
            (isActive ? "text-deepOrange font-bold" : "text-bordeaux") +
            " text-h6"
          }
        >
          Job Tracking
        </NavLink>

        <NavLink
          to="/resources"
          className={({ isActive }) =>
            (isActive ? "text-deepOrange font-bold" : "text-bordeaux") +
            " text-h6"
          }
        >
          Resources
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;