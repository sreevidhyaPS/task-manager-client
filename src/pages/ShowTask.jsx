import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ShowTask = () => {
  const { taskid } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending"
  });

  const fetchTask = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/task/show-task/${taskid}`);
      setFormData(res.data.taskData);
    } catch (error) {
      toast.error("Failed to load task");
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:3000/api/task/update-task/${taskid}`, formData);
    toast.success("Task updated successfully!");
    navigate("/task-list"); 
  } catch (error) {
    toast.error("Update failed: " + (error.response?.data?.message || error.message));
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-xl p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Task Details</h1>

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="pending">Pending</option>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowTask;
