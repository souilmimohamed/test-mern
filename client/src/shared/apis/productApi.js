import axios from "axios";
import { API_ENDPOINT } from "../../constants";
import { intercept } from "../axiosInterceptor";

const module = "product";

export const CreateProduct = async (product) => {
  try {
    const { data: response } = await axios.post(
      `${API_ENDPOINT}${module}/createProduct`,
      product
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetProducts = async (skip, limit, filter) => {
  try {
    const { data: response } = await axios.get(
      `${API_ENDPOINT}${module}/list?skip=${skip}&limit=${limit}&filter=${filter}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
