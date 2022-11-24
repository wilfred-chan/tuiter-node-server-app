import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

mongoose.connect("mongodb://localhost:27017/tuiter");

const app = express();
app.use(cors());
app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
