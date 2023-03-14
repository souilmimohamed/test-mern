import CreateProductHandler from "../handlers/product/createProductHandler.js";
import GetProductsHandler from "../handlers/product/getProductsHandler.js";
import ResponseModel from "../shared/responseModel.js";
import logger from "../shared/logger.js";

let responseModel = new ResponseModel();

export const createProduct = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new CreateProductHandler(userID, req.body).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const getProducts = async (req, res) => {
  try {
    const { skip, limit, filter } = req.query;
    let response = await new GetProductsHandler(skip, limit, filter).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};
