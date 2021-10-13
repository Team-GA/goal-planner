import axios from "axios";

const apiURL =
    process.env.NODE_ENV === "development" 
    ? "http://localhost:3001" 
    : null;

export const getPlannerEntries = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/plannerentries, config`);
            return response.data;
        }
        return[];
    } catch (error) {
        console.error(error.message);
    }
}