import { Router } from "express";
import { auth } from "../middlewares/auth";
import * as UserController from "../controllers/user";

const UserRouter = Router();

UserRouter.post("/validate", auth, UserController.validate);

export default UserRouter;
