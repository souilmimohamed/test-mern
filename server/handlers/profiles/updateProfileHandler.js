import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import Profile from "../../models/profile.js";
import parseUserData from "../../parsers/parseUserData.js";
import mongoose from "mongoose";
import logger from "../../shared/logger.js";

let response = new responseModel();

class UpdateProfileHandler {
  constructor(userID, data) {
    this.userID = userID;
    this._data = data;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      await Profile.findByIdAndUpdate(this._data._id, this._data);
      return response.successReponse(1);
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    let user = await User.findOne({ _id: this.userID });
    if (!user) {
      return response.failureReponse("user not found");
    } else {
      let profilesIds = user.profiles;
      let profiles = await Profile.find({ _id: { $in: [...profilesIds] } });
      let access = parseUserData(user, profiles);
      if (!access.access.administration) {
        return response.failureReponse("user dosen't have access.");
      }
    }
    if (!mongoose.Types.ObjectId.isValid(this._data._id))
      return response.failureReponse("No profile found with this id");
    return response.successReponse();
  }
}

export default UpdateProfileHandler;
