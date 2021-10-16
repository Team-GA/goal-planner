import axios from "axios";

const apiUrl = 
process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : null;

const buildHeaders =(token)=>{
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}
export const getAllTasks = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiUrl}/api/task`, config)
            return response.data;
        }
        return [];
    } catch (error) {
        console.error(error.message);
    }
}

export const createTask = async (newTask) => {
    
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.post(`${apiUrl}/api/newTask`, newTask, config)
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
            const response = await axios.get(`${apiUrl}/api/task/${id}`, config)
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
            const response = await axios.delete(`${apiUrl}/api/task/${id}`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}
export const updateTask = async (id, task) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const config = buildHeaders(token);
        const response = await axios.put(
          `${apiUrl}/api/task/${id}`,
          task,
          config
        );
        return response.data;
      }
    } catch (error) {
      console.error(error.message);
    }
  };