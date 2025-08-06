import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import ShowTask from "./pages/ShowTask";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="task-list" element={<TaskListPage />} />
           <Route path="show-task/:taskid" element={<ShowTask />} />
        </Route>
      </Routes>
       <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
