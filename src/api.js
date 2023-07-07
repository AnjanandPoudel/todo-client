import axios from 'axios';

// Define the base URL for the API
const baseURL = 'http://localhost:5000';

// POST request example
export const createTodo = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/todo`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// GET request example
export const getTodo = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/todo`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// PUT request example
export const updateTodo = async (id, data) => {
  try {
    const response = await axios.patch(`${baseURL}/api/todo/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE request example
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/api/todo/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
