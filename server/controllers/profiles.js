import GetProfilesHandler from "../handlers/profiles/getProfilesHandler.js";
import CreateProfileHandler from "../handlers/profiles/createProfileHandler.js";
import DeleteProfileHandler from "../handlers/profiles/deleteProfileHandler.js";
import UpdateProfileHandler from "../handlers/profiles/updateProfileHandler.js";

import ResponseModel from "../shared/responseModel.js";
import logger from "../shared/logger.js";

let responseModel = new ResponseModel();

export const getProfiles = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new GetProfilesHandler(userID).handle();
    res.status(200).send(response.successReponse(response));
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const createProfile = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new CreateProfileHandler(userID, req.body).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { userID } = req;
    let response = await new DeleteProfileHandler(userID, id).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { userID } = req;
    let response = await new UpdateProfileHandler(userID, req.body).handle();
    res.status(200).send(response);
  } catch (error) {
    logger.logRequestError(req, error);
    res.status(404).send(responseModel.failureReponse(error.message));
  }
};
