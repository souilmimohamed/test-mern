import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authenticationRoutes from "./routes/authentication.js";
import userRoutes from "./routes/users.js";
import profileRoutes from "./routes/profiles.js";
import expressOasGenerator from "express-oas-generator";
import logger from "./shared/logger.js";
import {} from "dotenv/config";

const app = express();
expressOasGenerator.init(app, {});

app.use(bodyParser.json());
app.use(cors());
app.use("/authentication", authenticationRoutes);
app.use("/users", userRoutes);
app.use("/profiles", profileRoutes);

const url = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);
mongoose
  .connect(url, {})
  .then(() =>
    app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
  )
  .catch((error) => {
    logger.log.error(error.message);
    console.log(error.message);
  });
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});
