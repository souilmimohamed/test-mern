import ParseList from "../parsers/parseList.js";

class ResponseModel {
  constructor(Success, Errors, Warnings, Info, Body) {
    this.Success = Success;
    this.Errors = Errors;
    this.Warnings = Warnings;
    this.Info = Info;
    this.Body = Body;
  }
  successReponse(body) {
    return new ResponseModel(true, [], [], [], body);
  }
  failureReponse(errors) {
    return new ResponseModel(false, ParseList(errors), [], [], null);
  }
}

export default ResponseModel;
