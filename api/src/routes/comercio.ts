import { Router } from "express";
import { auth } from "../middlewares/auth";
import * as ComercioController from "../controllers/comercio";

const ComercioRouter = Router();

ComercioRouter.post("/create", auth, ComercioController.create);
ComercioRouter.get(
  "/getByPersonId/:person_id",
  auth,
  ComercioController.getByPersonId
);

export default ComercioRouter;
