import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import Profile from "../../models/profile.js";
import parseUserData from "../../parsers/parseUserData.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class GetProfilesHandler {
  constructor(userID) {
    this.userID = userID;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      const Profiles = await Profile.find();
      return response.successReponse(Profiles);
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

export default GetProfilesHandler;
