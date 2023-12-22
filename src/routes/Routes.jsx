import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "./../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import AllTasks from "../pages/Dashboard/AllTasks/AllTasks";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/FAQ/Faq";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <MainDashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/tasks",
        element: <AllTasks />,
      },
      {
        path: "/dashboard/addTask",
        element: <AddTask />,
      },
    ],
  },
]);

export default Routes;
