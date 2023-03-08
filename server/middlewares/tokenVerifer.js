import jwt from "jsonwebtoken";
import responseModel from "../shared/responseModel.js";
import {} from "dotenv/config";

let response = new responseModel();

export const token_key = process.env.TOKEN_KEY;
export const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) {
    return res
      .status(403)
      .send(response.failureReponse("No token attached to request"));
  }
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .send(response.failureReponse("A token is required for authentication"));
  }
  try {
    const decoded = jwt.verify(token, token_key);
    req.userID = decoded.user_id;
  } catch (err) {
    return res.status(401).send(response.failureReponse("Invalid token"));
  }
  return next();
};
