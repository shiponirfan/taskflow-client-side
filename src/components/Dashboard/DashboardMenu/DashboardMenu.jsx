import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import DashboardMenuContainer from "./DashboardMenuContainer";

const DashboardMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="relative">
      <div
        className="fixed top-10 left-1 z-50 p-2 text-2xl rounded-lg flex xl:hidden justify-center items-center text-white bg-bg-primary"
        onClick={toggleMenu}
      >
        <FaBars />
      </div>
      <div className="xl:hidden ">
        {isMenuVisible && <DashboardMenuContainer />}
      </div>
      <div className="xl:grid hidden ">
        <DashboardMenuContainer />
      </div>
      
    </div>
  );
};

export default DashboardMenu;
