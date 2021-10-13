import axios from "axios";

const apiUrl = 
process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : null;

export const getAllTasks = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiUrl}/api/auth/task`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export const createTask = async (newTask) => {
    
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.post(`${apiUrl}/api/auth/newTask`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}
export const getTaskbyId = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.get(`${apiUrl}/api/auth/task/${id}`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}
export const deleteTask = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.delete(`${apiUrl}/api/auth/task/${id}`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}
