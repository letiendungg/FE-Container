import axios from "axios";
const API_BASE_URL = "http://localhost:5000";
const accessToken = localStorage.getItem("token");

export const loginApi = async (user) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/api/v1/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign up.");
    }
  }
};

export const authenGoogleApi = async (dataLogin) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/`, dataLogin, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign up.");
    }
  }
};

export const SignupApi = async (user) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/api/v1/users/signup`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign up.");
    }
  }
};
