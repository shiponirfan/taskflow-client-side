import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div className=" font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white  shadow-xl duration-300 hover:shadow">

          {user?.photoURL ? (
                      <img src={user?.photoURL} className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" />
                    ) : (
                      <img src="https://i.ibb.co/MPpqQSM/user.png" className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" />
                    )}
          <div className="text-center mt-2 text-3xl font-medium">{user?.displayName ? user?.displayName : "Your Name"}</div>
          <div className="text-center mt-2 font-light text-sm">@{user?.displayName ? user?.displayName.replace(/\s/g, '').toLowerCase() : "username"}</div>
          <div className="px-6 text-center mt-2 font-light text-sm">
            <p>
            Meet {user?.displayName ? user?.displayName : "Jon Doe"}, the maestro behind TaskFlow&apos;s seamless task management. Turning tasks into triumphs with efficiency and precision. Your success, our priority.
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
  );
};

export default Profile;
