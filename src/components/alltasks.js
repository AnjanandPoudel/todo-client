import React from 'react';
import "../css/table.css"

const TaskTable = ({ tasks, deleteTask, updateTask }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Date</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td>{task.task}</td>
            <td>{task.date}</td>
            <td>{task.status}</td>
            <td>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => updateTask(task._id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
