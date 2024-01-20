import { Router } from "express";
import { auth } from "../middlewares/auth";
import * as ProductConttollers from "../controllers/product";

const ProductRouter = Router();

ProductRouter.get(
  "/getAllByRestaurantId/:restaurant_id",
  auth,
  ProductConttollers.getAllByRestaurantId
);

ProductRouter.post("/create", auth, ProductConttollers.create);
ProductRouter.post("/addFavorite", auth, ProductConttollers.addFavorite);

export default ProductRouter;
