import axios from 'axios';

const apiURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://goal-planner-osos.herokuapp.com";


const buildHeaders = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
}

export const getAllJournals = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/journals`, config);
            return response.data;
        }
        return [];
    } catch (error) {
        console.error(error.message);
    }
}

export const createJournal = async (newJournal) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const config = buildHeaders(token);
        const response = await axios.post(`${apiURL}/api/newJournal`, newJournal, config);
        return response.data;
      }
    } catch (error) {
      console.error(error.message);
    }
  }



export const getJournalbyId = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/journal/${id}`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteJournal = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.delete(`${apiURL}/api/journal/${id}`, config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export const updateJournal = async (id, journal) => {
    try {
        const token = localStorage.getItem("token");
        if(token){
            const config = buildHeaders(token);
            const response = await axios.put(`${apiURL}/api/journal/${id}`,journal,  config)
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}