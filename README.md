# 📘 Task Manager - Frontend (React + Vite)

This is the **frontend** of the MERN Stack Task Manager app.  
It is built using **React**, **Tailwind CSS**, and **Axios**, and provides a responsive UI to create, update, view, and delete tasks with live toast notifications and status filters.

---

## 🚀 Features

-  Create new tasks (title & description)
-  View all tasks with status badge (Pending, Running, Completed, Failed)
-  Edit task title, description, and status
-  Delete tasks with confirmation
-  Toast notifications for success/error
-  Tailwind-based clean and responsive UI
-  Form validation and error handling

---

## 🛠️ Tech Stack

- **React.js** (Vite)
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **React Toastify**
- **React Icons**

---

## 📁 Folder Structure

task-manager-client/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Badge.jsx
│ │ ├── Layout.jsx
│ │ └── Navigation.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── TaskListPage.jsx
│ │ └── ShowTask.jsx
│ ├── helper/
│ │ └── RouteName.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── README.md
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── package.json


---

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/sreevidhyaPS/task-manager-client.git
cd task-manager-client
