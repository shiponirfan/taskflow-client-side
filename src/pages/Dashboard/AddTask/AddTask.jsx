import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date());
  const { mutate: addTask } = useMutation({
    mutationKey: ["addTask", user?.email],
    mutationFn: async (taskData) => {
      return await axios.post(
        "https://task-flow-server-side.vercel.app/task",
        taskData
      );
    },
    onSuccess: () => {
      toast.success("Task Added Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const priority = e.target.priority.value;
    const descriptions = e.target.descriptions.value;
    const task = {
      title: title,
      priority: priority,
      descriptions: descriptions,
      deadline: deadline,
      status: "todo",
      userEmail: user?.email,
    };
    addTask(task);
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-40px)]">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddTask} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              name="priority"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="High" selected>
                High
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descriptions</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Descriptions"
              name="descriptions"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>

            <div className="border rounded-lg p-3">
              <DatePicker
                className="w-full"
                selected={deadline}
                onChange={(date) => setDeadline(date)}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white font-medium text-xl bg-gradient-to-r from-bg-primary to-bg-secondary">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
