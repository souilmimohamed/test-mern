import responseModel from "../../shared/responseModel.js";
import Product from "../../models/product.js";
import logger from "../../shared/logger.js";

let response = new responseModel();

class GetProductsHandler {
  constructor(skip, limit, filter) {
    this._skip = skip;
    this._limit = limit;
    this._filter = filter;
  }
  async handle() {
    try {
      let validation = await this.validate();
      if (!validation.Success) {
        return response.failureReponse(validation.Errors);
      }
      const count = await Product.count();
      const Products = await Product.find({
        name: new RegExp(this._filter, "i"),
      })
        .skip(this._skip)
        .limit(this._limit);
      return response.successReponse({ products: Products, count: count });
    } catch (error) {
      logger.log.error(error.message);
      return response.failureReponse(error.message);
    }
  }
  async validate() {
    return response.successReponse();
  }
}

export default GetProductsHandler;
