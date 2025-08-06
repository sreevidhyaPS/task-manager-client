import React, { useEffect, useState } from "react";
import axios from "axios";
import Badge from "../components/Badge";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/task/get-all-task");
      setTasks(res.data.taskData);
    } catch (err) {
      toast.error("Failed to load tasks");
    }
  };

  const handleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/api/task/delete-task/${id}`);
      toast.success("Task deleted successfully");
      fetchTasks(); 
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="pt-5 px-4">
      <h1 className="text-2xl font-bold mb-5">My Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="border p-4 rounded-md mb-4 bg-white shadow-md flex justify-between items-start"
          >
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <Badge
             props={{
                 text: task.status,
                         color:
                       task.status === "pending"
                          ? "yellow"
                     : task.status === "Running"
                      ? "blue"
                      : task.status === "Completed"
                     ? "green"
                      : "red", 
                     }}
                         />

              </div>
              <p className="text-sm text-gray-700 mb-2">{task.description}</p>
            </div>

            <div className="flex gap-2 items-start ms-4 mt-1">
              {/* Edit Button */}
  <button
  className="text-blue-600 hover:text-blue-800"
  onClick={() => navigate(`/show-task/${task._id}`)} 
>
  <FaEdit size={18} />
</button>

              {/* Delete Button */}
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(task._id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskListPage;
