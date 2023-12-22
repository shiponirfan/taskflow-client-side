import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/Dashboard/DashboardMenu/DashboardMenu";

const Dashboard = () => {
  return (
    <div className="flex gap-5 bg-[#F5F7F8] p-5">
      <div className="xl:w-[310px] absolute xl:relative">
        <DashboardMenu />
      </div>
      <div className="w-full xl:w-[calc(100%-310px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
