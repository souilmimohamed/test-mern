import axios from "axios";
import { API_ENDPOINT } from "../../constants";
import { intercept } from "../axiosInterceptor";

const module = "authentication";

export const Login = async (username, password) => {
  try {
    const { data: response } = await axios.post(
      `${API_ENDPOINT}${module}/login`,
      {
        username: username,
        password: password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserData = async () => {
  try {
    const { data: response } = await axios.get(
      `${API_ENDPOINT}${module}/getUserData`,
      {}
    );
    if (response.Success)
      localStorage.setItem("userData", JSON.stringify(response.Body));
  } catch (error) {
    console.log(error);
  }
};
