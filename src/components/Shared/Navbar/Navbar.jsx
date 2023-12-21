import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
  // Logout Button
  const handleLogoutBtn = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="group  cursor-pointer duration-300 hover:text-brand-primary  flex justify-center items-center border-2 hover:border-brand-primary  rounded-full "
              >
                <label className="md:w-14 w-11 avatar cursor-pointer align-bottom">
                  <div className="rounded-full duration-300  group-hover:ring-brand-primary ring-gray-200">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src="https://i.ibb.co/MPpqQSM/user.png" />
                    )}
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 p-2 z-20 shadow  menu menu-sm dropdown-content bg-base-100  rounded-box w-52"
              >
                <div className="px-4 py-3 text-sm text-gray-900">
                  <div className="font-medium ">
                    {user?.displayName ? user?.displayName : "Your Name"}
                  </div>
                  <div className="truncate">
                    {user?.email ? user?.email : "name@gmail.com"}
                  </div>
                </div>

                <NavLink to="/dashboard">
                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-brand-secondary hover:text-bg-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      Dashboard
                    </p>
                  </button>
                </NavLink>

                <hr
                  className="my-2 border-blue-gray-50"
                  tabIndex="-1"
                  role="menuitem"
                />
                <button
                  onClick={handleLogoutBtn}
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-brand-secondary hover:text-bg-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Sign Out
                  </p>
                </button>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-bg-primary py-2 hover:bg-bg-secondary duration-300 text-white px-6  font-bold rounded"
            >
              Let’s Explore
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
