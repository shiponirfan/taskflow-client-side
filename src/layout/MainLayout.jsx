import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="font-font-inter">
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayout;