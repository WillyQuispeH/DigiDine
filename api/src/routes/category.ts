import { Router } from "express";
import { auth } from "../middlewares/auth";
import * as CategoryController from "../controllers/category";

const CategoryRouter = Router();

CategoryRouter.get(
  "/getByComercioId/:comercio_id",
  auth,
  CategoryController.getByIdComercioId
);
CategoryRouter.post("/updateImg", auth, CategoryController.updateImg);

export default CategoryRouter;
