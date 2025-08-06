import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify"; 

const HomePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/task/create-task", formData);
      toast.success(" Task added successfully!");
      setFormData({ title: "", description: "" }); 
    } catch (error) {
      toast.error(" Task creation failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-xl p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <FaTasks className="text-red-600 text-3xl mr-2" />
          <h1 className="text-3xl font-extrabold text-gray-800">Add New Task</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              className="w-full p-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write task description..."
              className="w-full p-3 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
