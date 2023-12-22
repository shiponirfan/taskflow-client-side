import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MainDashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(
        "https://task-flow-server-side.vercel.app/tasks"
      );
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="fixed w-full bg-white  z-50 h-full flex justify-center items-center">
        <span className="loading loading-ring w-20 text-bg-primary "></span>
      </div>
    );
  }
  return (
    <div className="min-h-[calc(100vh-40px)]">
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              {user?.photoURL ? (
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              ) : (
                <div className="w-16 rounded-full">
                  <img src="https://i.ibb.co/MPpqQSM/user.png" />
                </div>
              )}
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
      <div className="flex justify-between mt-24 items-center gap-6">
        <div className="stats h-96 shadow w-1/2 ">
          <div className="stat text-center ">
            <div className="stat-title">Total Tasks</div>
            <div className="stat-value">{tasks?.length}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className=" font-sans h-96 w-full flex flex-row justify-center items-center">
            <div className="card w-96 mx-auto bg-white  shadow-xl duration-300 hover:shadow">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                />
              ) : (
                <img
                  src="https://i.ibb.co/MPpqQSM/user.png"
                  className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                />
              )}
              <div className="text-center mt-2 text-3xl font-medium">
                {user?.displayName ? user?.displayName : "Your Name"}
              </div>
              <div className="text-center mt-2 font-light text-sm">
                @
                {user?.displayName
                  ? user?.displayName.replace(/\s/g, "").toLowerCase()
                  : "username"}
              </div>
              <div className="px-6 text-center mt-2 font-light text-sm">
                <p>
                  Meet {user?.displayName ? user?.displayName : "Jon Doe"}, the
                  maestro behind TaskFlow&apos;s seamless task management.
                  Turning tasks into triumphs with efficiency and precision.
                  Your success, our priority.
                </p>
              </div>
              <hr className="mt-8" />
              <div className="flex p-4">
                <div className="w-1/2 text-center">
                  <span className="font-bold">1.8 k</span> Followers
                </div>
                <div className="w-0 border border-gray-300"></div>
                <div className="w-1/2 text-center">
                  <span className="font-bold">2.0 k</span> Following
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
