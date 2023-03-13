import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authenticationRoutes from "./routes/authentication.js";
import userRoutes from "./routes/users.js";
import expressOasGenerator from "express-oas-generator";
import connectDB from "./shared/db.js";
import colors from "colors";
import {} from "dotenv/config";

const app = express();
expressOasGenerator.init(app, {});

app.use(bodyParser.json());
app.use(cors());
app.use("/authentication", authenticationRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () =>
  console.log(`server listening on port: ${PORT}`.yellow.bold)
);

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});
