import responseModel from "../../shared/responseModel.js";
import User from "../../models/user.js";
import Product from "../../models/product.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class CreateProductHandler {
  constructor(userID, product) {
    this._userID = userID;
    this._data = product;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      const newProduct = new Product(this._data);
      await newProduct.save();
      return response.successReponse(this._data);
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
    return response.successReponse();
  }
}

export default CreateProductHandler;
