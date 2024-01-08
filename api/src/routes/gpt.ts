import { Router } from "express";
import { auth } from "../middlewares/auth";

import * as GPTControlles from "../controllers/gpt";

const GPTRouter = Router();

GPTRouter.post("/completions", auth, GPTControlles.petitionOpenia);

export default GPTRouter;
