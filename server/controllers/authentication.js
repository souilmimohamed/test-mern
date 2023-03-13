import GetUserDataHandler from "../handlers/authentification/GetUserDataHandler.js";
import LoginHandler from "../handlers/authentification/loginHandler.js";

import ResponseModel from "../shared/responseModel.js";
import logger from "../shared/logger.js";

let responseModel = new ResponseModel();

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let response = await new LoginHandler({ email, password }).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};
export const getUserData = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new GetUserDataHandler(userID).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};
