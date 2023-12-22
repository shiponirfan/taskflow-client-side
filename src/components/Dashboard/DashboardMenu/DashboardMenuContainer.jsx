import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
const DashboardMenuContainer = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [

    {
      url: "/dashboard/tasks",
      title: "All Tasks",
    },
    {
      url: "/dashboard/addTask",
      title: "Add Task",
    },
    {
        url: "/dashboard/profile",
        title: "My Profile",
      },
    {
        url: "/",
        title: "Go Back",
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex z-40 fixed w-[310px] flex-col space-y-1 rounded-xl bg-white border h-[calc(100vh-40px)]">
      <div className="pt-5 pb-7 flex justify-center">
        <img className="w-28" src={logo} alt="logo" />
      </div>
      <div className="flex-grow flex flex-col space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${
                  location.pathname === "/dashboard"
                    ? "px-4 bg-gradient-to-r from-bg-primary to-bg-secondary  mx-4 rounded-lg py-3 text-white font-bold"
                    : "px-4  py-3 mx-4 font-medium hover:text-bg-primary duration-300 hover:bg-gray-100 rounded-lg"
                }`
              : "px-4  py-3 mx-4 font-medium hover:text-bg-primary duration-300 hover:bg-gray-100 rounded-lg"
          }
        >
          Dashboard
        </NavLink>
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "px-4 bg-gradient-to-r from-bg-primary to-bg-secondary  mx-4 rounded-lg py-3 text-white font-bold"
                : "px-4  py-3 mx-4 font-medium hover:text-bg-primary duration-300 hover:bg-gray-100 rounded-lg"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="justify-end items-end">
        <div className="group justify-center duration-300 hover:text-brand-primary  flex items-center border-2 hover:border-brand-primary  rounded-full ">
          <label className="md:w-14 w-11 avatar cursor-pointer align-bottom">
            <div className="rounded-full duration-300  group-hover:ring-brand-primary ring-gray-200">
              {user?.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <img src="https://i.ibb.co/MPpqQSM/user.png" />
              )}
            </div>
          </label>
          <div className="px-4 py-3 text-xl text-gray-900">
            <div className="font-medium ">
              {user?.displayName ? user?.displayName : "Your Name"}
            </div>
          </div>
          <button
            onClick={handleLogoutBtn}
            className="flex cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-brand-secondary hover:text-bg-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardMenuContainer;
