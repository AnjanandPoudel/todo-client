import React, { useEffect, useState } from 'react';
import { createTodo, getTodo, updateTodo, deleteTodo, getTodos } from './api';
import Dashboard from './components/dashboard';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todos = await getTodos();
      console.log({todos})
      setTodos(todos);
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  };

  const fetchTodo = async (id) => {
    try {
      const data = await getTodo(id);
      console.log({data})
      setTodo(data);
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      const newTodo = { title: 'New Todo' };
      const createdTodo = await createTodo(newTodo);
      setTodos([...todos, createdTodo]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const updateTodoItem = async (id, updatedData) => {
    try {
      const updatedTodo = await updateTodo(id, updatedData);
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      await deleteTodo(id);
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <Dashboard />
      {/* <h1>Todos</h1>

      <button onClick={addTodo}>Add Todo</button>
      <button onClick={fetchTodos}>fetch Todo</button> */}

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title}
            <button onClick={() => updateTodoItem(todo._id, { completed: true })}>
              Mark as Completed
            </button>
            <button onClick={() => deleteTodoItem(todo._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
