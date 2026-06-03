import axios from 'axios';

const BASE_API_URL = "https://lambda-crud-app.onrender.com/tasks";

export const fetchTasks = async()=>{

    const response = await axios.get(BASE_API_URL);

    return response.data
}

export const addTask = async (newTask) => {

    const response = await axios.post(BASE_API_URL,newTask);

    return response.data;

}

export const updateTask = async(id,updatedInfo) => {

    const response = await axios.put(`${BASE_API_URL}/${id}`,updatedInfo);

    return response.data;
}

export const deleteTask = async(id) => {
    
    const response = await axios.delete(`${BASE_API_URL}/${id}`);

    return response.data;
}
