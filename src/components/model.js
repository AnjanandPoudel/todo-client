import React, { useState } from 'react';
import '../css/model.css'

const TaskModal = ({ showModal, closeModal, addNewTask,updateSubmit,updateShowModal,updateId }) => {
  const [newTaskInput, setNewTaskInput] = useState('');

  const [updateTaskInput, setUpdateTaskInput] = useState('');
  const [updateStatusInput, setUpdateStatusInput] = useState('');


  function handleNewTaskInputChange(event) {
    setNewTaskInput(event.target.value);
  }

  function handleUpdatedTaskInputChange(event) {
    setUpdateTaskInput(event.target.value);
  }
  function handleUpdatedStatusInputChange(event) {
    setUpdateStatusInput(event.target.value);
  }

  function handleAddTask() {
    addNewTask(newTaskInput);
    setNewTaskInput('');
  }

  function handleUpdateTask() {
    // console.log(updateId,updateTaskInput,updateStatusInput)
    if(!['completed','failed','ongoing'].includes(updateStatusInput)){
      alert("Only 'completed','failed','ongoing' are accepted as Status !!!!")
      return
    }

    console.log("herrrrrrr",updateStatusInput)
    updateSubmit(updateId,updateTaskInput,updateStatusInput);
    setUpdateTaskInput('');
  }

  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <h2 >Add New Task</h2>
            <input
              type="text"
              value={newTaskInput}
              onChange={handleNewTaskInputChange}
              placeholder="Task name  "
            />
            <div className="modal-buttons">
              <button className='btn btn-success btn-lg' onClick={handleAddTask}>Add Task</button>
              <button className='btn btn-danger btn-lg' onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {updateShowModal && (
        <div className="modal-container">
          <div className="modal-content">
            <h2 >Update Task</h2>
            <input
              type="text"
              value={updateTaskInput}
              onChange={handleUpdatedTaskInputChange}
              placeholder="Task name (Optional) "
            />
            <input
              type="text"
              value={updateStatusInput}
              onChange={handleUpdatedStatusInputChange}
              placeholder="Status (completed/failed/ongoing) Only these three are accepted !!!"
            />
            <div className="modal-buttons">
              <button className='btn btn-success btn-lg' onClick={handleUpdateTask}>Update Task</button>
              <button className='btn btn-danger btn-lg' onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;