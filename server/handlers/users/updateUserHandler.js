import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import mongoose from "mongoose";
import logger from "../../shared/logger.js";

let response = new responseModel();

class UpdateUserHandler {
  constructor(userID, user) {
    this._userID = userID;
    this._data = user;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      await User.findByIdAndUpdate(this._data._id, this._data);
      return response.successReponse(1);
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    let user = await User.findOne({ _id: this._userID });
    if (!user) {
      return response.failureReponse("user not found");
    } else {
      if (!user.isAdmin) {
        return response.failureReponse("user dosen't have access.");
      }
    }
    if (!mongoose.Types.ObjectId.isValid(this._data._id))
      return response.failureReponse("No user found with this id");
    return response.successReponse();
  }
}

export default UpdateUserHandler;
