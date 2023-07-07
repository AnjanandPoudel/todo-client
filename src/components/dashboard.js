import React, { useState } from "react";
import TaskTable from "./alltasks";
import {
  createTodo,
  deleteTodo,
  getCompletedTodo,
  getCompletionRateTodo,
  getTodos,
  updateTodo,
} from "../api";
import TaskModal from "./model";
import CompletionTable from "./completionRate";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updateShowModal, setUpdateShowModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [completionRateBool, setCompletionRateBool] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState("");

  const [completionRate, setCompletionRate] = useState(0);

  const dashboardItems = [
    { title: "Get all Tasks", onClick: getAllTasks },
    { title: "Get Completed Tasks", onClick: getCompletedTasks },
    { title: "Add new Task", onClick: addNewTask },
    { title: "Completion Rate", onClick: calculateCompletionRate },
  ];

  //model
  function openModal() {
    console.log("openModal");
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setNewTaskInput("");
  }

  //model ends

  async function getAllTasks() {
    try {
      const fetchedTasks = await getTodos();
      setTasks(fetchedTasks);
      setActiveButton("getAllTasks");
    } catch (error) {
      console.error("Error getting todos:", error);
    }
  }

  async function getCompletedTasks() {
    // Filter completed tasks from the allTasks state or update state based on your requirements
    try {
      const completed = await getCompletedTodo();
      setTasks(completed);
      setActiveButton("getCompletedTasks");
    } catch (error) {
      console.error("Error getting todos:", error);
    }
  }

  async function addNewTask(task) {
    openModal();
    if (typeof task == "string") {
      console.log({ task });
      const newTask = await createTodo({ task });
      console.log(newTask);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }

  //   async function (task) {
  //     openModal()
  //     if(typeof task == "string"){
  //         console.log({task})
  //         const newTask =await createTodo({task}) ;
  //         console.log(newTask)
  //         setTasks((prevTasks) => [...prevTasks, newTask]);
  //     }
  //   }

  async function deleteTask(taskId) {
    const data = await deleteTodo(taskId);
    getAllTasks();
  }
  async function updateTask(taskId) {
    setUpdateShowModal(true);
    setUpdateId(taskId);
  }

  async function updateSubmit(taskId, task, status) {
    console.log(taskId, task, status);

    const data = await updateTodo(taskId, {
      task: task.length > 0 ? task : undefined,
      status: status.length > 0 ? status : undefined,
    });

    console.log(data);

    getAllTasks();
    setUpdateShowModal(false);
  }

 async function calculateCompletionRate() {
    const data= await getCompletionRateTodo()
    setCompletionRateBool(true)
    setTasks(data)
    console.log(data);
    
  }

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <h1 className="dashboard-title">Dashboard</h1>
          {dashboardItems.map((item, index) => (
            <DashboardItem
              key={index}
              title={item.title}
              onClick={item.onClick}
            />
          ))}
        </div>
        <div className="dashboard-contains">
          {tasks.length > 0 && completionRateBool==false && (
            <TaskTable
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}

          {completionRateBool && (
            <CompletionTable
              items={tasks}
            />
          )}
        </div>
      </div>

      <TaskModal
        showModal={showModal}
        closeModal={closeModal}
        addNewTask={addNewTask}
        updateShowModal={updateShowModal}
        updateSubmit={updateSubmit}
        updateId={updateId}
      />
    </>
  );
};

const DashboardItem = ({ title, onClick }) => {
  return (
    <div className="dashboard-item" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default Dashboard;
