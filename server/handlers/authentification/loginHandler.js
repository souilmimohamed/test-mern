import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import generatoToken from "../../shared/generateUserToken.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class LoginHandler {
  constructor(data) {
    this.data = data;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      const { username, password } = this.data;
      const user = await User.findOne({ username });
      if (user && user.password === password) {
        const token = generatoToken(user);
        return response.successReponse(token);
      } else return response.failureReponse("wrong user credentials");
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    return response.successReponse();
  }
}

export default LoginHandler;
