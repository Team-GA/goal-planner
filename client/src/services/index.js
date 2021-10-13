import axios from 'axios';

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : null;


export const registerUser = async (userInfo) => {
    try {

        const response = await axios.get(`${apiURL}/api/auth/register`, userInfo)
        localStorage.setItem("token", response.data.token);
        return response.data.user;
    } catch (error) {
        console.error(error.message);
    }
}

export const loginUser = async (userInfo) => {
    try {

        const response = await axios.get(`${apiURL}/api/auth/login`, userInfo)
        localStorage.setItem("token", response.data.token);
        return response.data.user;
    } catch (error) {
        console.error(error.message);
    }
}

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