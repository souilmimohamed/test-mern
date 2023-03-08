import GetUsersHandler from "../handlers/users/getUsersHandler.js";
import CreateUserHandler from "../handlers/users/createUserHandler.js";
import DeleteUserHandler from "../handlers/users/deleteUserHandler.js";
import UpdateUserHandler from "../handlers/users/updateUserHandler.js";
import UpdateUserProfilesHandler from "../handlers/users/updateUserProfilesHandler.js";

import ResponseModel from "../shared/responseModel.js";
import logger from "../shared/logger.js";

let responseModel = new ResponseModel();

export const getUsers = async (req, res) => {
  const { userID } = req;

  try {
    let response = await new GetUsersHandler(userID).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const createUser = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new CreateUserHandler(userID, req.body).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userID } = req;
    const { id } = req.params;
    let response = await new DeleteUserHandler(userID, id).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userID } = req;
    const user = req.body;
    let response = await new UpdateUserHandler(userID, user).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const updateUserProfiles = async (req, res) => {
  try {
    const { profiles, userId } = req.body;
    const { userID } = req;
    let response = await new UpdateUserProfilesHandler(userID, {
      profiles,
      userId,
    }).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};
