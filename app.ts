import express, { Application } from "express";
import cors from "cors";
import { createuserdata } from "./create_data";
import { getRoute } from "./get_users";
const app: Application = express();
const userRoute = express.Router();
export const singleUserRoute = express.Router();
app.use(express.json());
app.use(cors());
userRoute.post("/", createuserdata.createUser);
app.use("/api/users", userRoute);
app.use("/api/users", getRoute);
app.use("/api/users/:userId", singleUserRoute);

export default app;
