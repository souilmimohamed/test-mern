import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class CreateUserHandler {
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
      const newUser = new User(this._data);
      await newUser.save();
      return response.successReponse(this._data);
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    // let user = await User.findOne({ _id: this._userID });
    // if (!user) {
    //   return response.failureReponse("user not found");
    // } else {
    //   if (!user.isAdmin) {
    //     return response.failureReponse("user dosen't have access.");
    //   }
    // }
    return response.successReponse();
  }
}

export default CreateUserHandler;
