import axios from 'axios';
// import { useHistory } from 'react-router';

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : null;


export const registerUser = async (userInfo) => {
    try {

        const response = await axios.post(`${apiURL}/api/auth/register`, userInfo)
        localStorage.setItem("token", response.data.token);
        return response.data.user;
    } catch (error) {
        console.error(error.message);
    }
}

export const loginUser = async (userInfo) => {
    try {

        const response = await axios.post(`${apiURL}/api/auth/login`, userInfo)
        localStorage.setItem("token", response.data.token);
        return response.data.user;
    } catch (error) {
        console.error(error.message);
    }
}

// export const logout = async (userInfo) => {
//     const history = useHistory();
//     try {
//         localStorage.removeItem("token", userInfo)
//         if(!userInfo) {
//             history.push("/")
//         }
//     } catch (error) {
//         console.error(error.message); 
//     }
//  }

const buildHeaders = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token")
      if(token) {
          const config = buildHeaders(token)
          const response = await axios.get(`${apiURL}/api/auth/verify`, config)
          return response.data.user
      }
      return null;
    } catch (error) {
      console.error(error.message);
    }
}

export const getAllPlannerEntries = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/planner-entries`, config);
            return response.data;
        }
        return[];
    } catch (error) {
        console.error(error.message);
    }
}

export const getPlannerEntryById = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/planner-entries/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}


export const createPlannerEntry = async (newPlannerEntry) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.post(`${apiURL}/api/planner-entries`, newPlannerEntry, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export const updatePlannerEntry = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.put(`${apiURL}/api/planner-entries/${id}`, config);
            return response.data;
        }
        return[];
    } catch (error) {
        console.error(error.message);
    }
}

export const destoryPlannerEntry = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.delete(`${apiURL}/api/planner-entries/${id}`, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

// export const getAllTasks = async () => {
//     try {
//         const token = localStorage.getItem("token");
//         if (token) {
//             const config = buildHeaders(token);
//             const response = await axios.get(`${apiUrl}/api/task`, config)
//             return response.data;
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// export const createTask = async (newTask) => {
    
//     try {
//         const token = localStorage.getItem("token");
//         if(token){
//             const config = buildHeaders(token);
//             const response = await axios.post(`${apiUrl}/api/newTask`, config)
//             return response.data;
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }