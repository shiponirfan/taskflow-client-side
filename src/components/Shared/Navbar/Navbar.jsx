import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  const navItems = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/mobiles",
      title: "Mobiles",
    },
    {
      url: "/about",
      title: "About Us",
    },
    {
      url: "/contact",
      title: "Contact Us",
    },
  ];
  return (
    <div className="bg-white navbar-menu">
        
      <div className="navbar container mx-auto px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-3 text-bg-primary font-bold"
                    : "px-3 font-medium hover:text-bg-primary duration-300"
                }
              >
                {item.title}
              </NavLink>
            ))}
            </ul>
          </div>
          <Link to="/">
            <img className="w-28" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-3 text-bg-primary font-bold"
                    : "px-3 font-medium hover:text-bg-primary duration-300"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link
            to="/login"
            className="bg-bg-primary py-2 hover:bg-bg-secondary duration-300 text-white px-6  font-bold rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
