import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import Profile from "../../models/profile.js";
import parseUserData from "../../parsers/parseUserData.js";
import { GenerateNewColor } from "../../shared/getNewHexColor.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class CreateProfileHandler {
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
      const newProfile = new Profile(this._data);
      newProfile.color = await GenerateNewColor();
      await newProfile.save();
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
    return response.successReponse();
  }
}

export default CreateProfileHandler;
