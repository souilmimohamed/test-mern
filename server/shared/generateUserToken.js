import jwt from "jsonwebtoken";

function generatoToken(user) {
  const token = jwt.sign(
    { user_id: user._id, email: user.email },
    process.env.TOKEN_KEY,
    { expiresIn: "24h" }
  );
  return token;
}

export default generatoToken;
