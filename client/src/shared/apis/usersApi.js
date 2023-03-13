import axios from "axios";
import { API_ENDPOINT } from "../../constants";
import { intercept } from "../axiosInterceptor";

const module = "users";

export const CreateUser = async (accountData) => {
  try {
    const { data: response } = await axios.post(
      `${API_ENDPOINT}${module}/createUser`,
      accountData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
