import axios from 'axios';

const apiURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : null;


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
            const response = await axios.get(`${apiURL}/api/journal`, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}