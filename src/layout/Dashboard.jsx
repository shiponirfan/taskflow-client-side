import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/Dashboard/DashboardMenu/DashboardMenu";

const Dashboard = () => {
  return (
    <div className="flex gap-5 bg-[#F5F7F8] p-5">
      <div className="w-[310px] ">
        <DashboardMenu />
      </div>
      <div className="w-[calc(100%-310px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
