import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { IoCloseCircleOutline } from "react-icons/io5";
const AllTasks = () => {
  const { user } = useContext(AuthContext);
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(
        "https://task-flow-server-side.vercel.app/tasks"
      );
      return res.data;
    },
  });
  const { mutate: setOngoing } = useMutation({
    mutationKey: ["setOngoing", user?.email],
    mutationFn: async (ongoingData) => {
      return await axios.patch(
        `https://task-flow-server-side.vercel.app/task/${ongoingData.id}`,
        ongoingData
      );
    },
    onSuccess: () => {
      toast.success("Added To Ongoing", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch();
    },
  });
  const { mutate: setCompleted } = useMutation({
    mutationKey: ["setCompleted", user?.email],
    mutationFn: async (completedData) => {
      return await axios.patch(
        `https://task-flow-server-side.vercel.app/task/${completedData.id}`,
        completedData
      );
    },
    onSuccess: () => {
      toast.success("Added To Completed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch();
    },
  });
  const { mutate: setRemove } = useMutation({
    mutationKey: ["setRemove", user?.email],
    mutationFn: async (removeData) => {
      return await axios.delete(
        `https://task-flow-server-side.vercel.app/task/${removeData}`);
    },
    onSuccess: () => {
      toast.success("Delete Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch();
    },
  });
  const handleSetOngoing = (id) => {
    const ongoingData = {
      status: "ongoing",
      id: id,
    };
    setOngoing(ongoingData);
  };
  const handleSetCompleted = (id) => {
    const completedData = {
      status: "completed",
      id: id,
    };
    setCompleted(completedData);
  };
  const handleDelete = (id) => {
    setRemove(id);
  };
  if (isLoading) {
    return <h2>...Loading</h2>;
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className=" rounded-xl space-y-8">
          <h2 className="text-xl font-bold mb-4 text-center">Todo</h2>
          {tasks
            ?.filter((task) => task?.status === "todo")
            ?.map((task) => (
              <div
                key={task?._id}
                className="card w-full bg-base-100 shadow-xl"
              >
                <div className="card-body relative space-y-2">
                  <div
                    className={`${
                      task?.priority === "Low"
                        ? "badge-success"
                        : task?.priority === "Moderate"
                        ? "badge-warning"
                        : task?.priority === "High"
                        ? "badge-error"
                        : ""
                    } badge absolute -top-4 left-0 text-white p-4 font-medium gap-2`}
                  >
                    {" "}
                    {task?.priority}
                  </div>
                  <h2 className="card-title font-bold">{task?.title}</h2>
                  <p>{task?.descriptions}</p>

                  <div className="card-actions items-end">
                    <div className="flex justify-between items-center w-full">
                      <div className="badge badge-neutral font-medium p-4 text-white badge-outline">
                        Deadline: {task?.deadline?.slice(0, 10)}
                      </div>
                      <button
                        onClick={() => handleSetOngoing(task?._id)}
                        className="badge badge-accent font-medium p-4 text-white hover:bg-bg-primary"
                      >
                        Set Ongoing
                      </button>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(task?._id)} className=" text-3xl text-gray-500 hover:text-red-500 duration-300 absolute -top-3 right-0 ">
                  <IoCloseCircleOutline />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="rounded-xl space-y-8">
          <h2 className="text-xl font-bold mb-4 text-center">Ongoing</h2>
          {tasks
            ?.filter((task) => task?.status === "ongoing")
            ?.map((task) => (
              <div
                key={task?._id}
                className="card w-full bg-base-100 shadow-xl"
              >
                <div className="card-body relative space-y-2">
                  <div
                    className={`${
                      task?.priority === "Low"
                        ? "badge-success"
                        : task?.priority === "Moderate"
                        ? "badge-warning"
                        : task?.priority === "High"
                        ? "badge-error"
                        : ""
                    } badge absolute -top-4 left-0 text-white p-4 font-medium gap-2`}
                  >
                    {" "}
                    {task?.priority}
                  </div>
                  <h2 className="card-title font-bold">{task?.title}</h2>
                  <p>{task?.descriptions}</p>

                  <div className="card-actions items-end">
                    <div className="flex justify-between items-center w-full">
                      <div className="badge badge-neutral font-medium p-4 text-white badge-outline">
                        Deadline: {task?.deadline?.slice(0, 10)}
                      </div>
                      <button
                        onClick={() => handleSetCompleted(task?._id)}
                        className="badge badge-secondary font-medium p-4 text-white  hover:bg-bg-primary"
                      >
                        Set Completed
                      </button>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(task?._id)} className=" text-3xl text-gray-500 hover:text-red-500 duration-300 absolute -top-3 right-0 ">
                  <IoCloseCircleOutline />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className=" rounded-xl space-y-8">
          <h2 className="text-xl font-bold mb-4 text-center">Completed</h2>
          {tasks
            ?.filter((task) => task?.status === "completed")
            ?.map((task) => (
              <div
                key={task?._id}
                className="card w-full bg-base-100 shadow-xl"
              >
                <div className="card-body relative space-y-2">
                  <div
                    className={`${
                      task?.priority === "Low"
                        ? "badge-success"
                        : task?.priority === "Moderate"
                        ? "badge-warning"
                        : task?.priority === "High"
                        ? "badge-error"
                        : ""
                    } badge absolute -top-4 left-0 text-white p-4 font-medium gap-2`}
                  >
                    {" "}
                    {task?.priority}
                  </div>
                  <h2 className="card-title font-bold">{task?.title}</h2>
                  <p>{task?.descriptions}</p>

                  <div className="card-actions items-end">
                    <div className="flex justify-between items-center w-full">
                      <div className="badge badge-neutral font-medium p-4 text-white badge-outline">
                        Deadline: {task?.deadline?.slice(0, 10)}
                      </div>
                      <button className="badge badge-primary font-medium p-4 text-white ">
                        Completed
                      </button>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(task?._id)} className=" text-3xl text-gray-500 hover:text-red-500 duration-300 absolute -top-3 right-0 ">
                  <IoCloseCircleOutline />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
