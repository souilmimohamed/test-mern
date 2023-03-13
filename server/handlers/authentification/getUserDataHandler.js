import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import logger from "../../shared/logger.js";
let response = new responseModel();

class GetUserDataHandler {
  constructor(userID) {
    this.userID = userID;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      let user = await User.findOne({ _id: this.userID });
      return response.successReponse(user);
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    let user = await User.findOne({ _id: this.userID });
    if (!user) return response.failureReponse("user not found");
    return response.successReponse();
  }
}

export default GetUserDataHandler;
