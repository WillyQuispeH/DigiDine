import createLogger from "../utils/logger";
import { Response, Request } from "express";

import * as ProductModels from "../models/product";
import * as IngredientsModels from "../models/ingredients";
import fs from "fs";

const getAllByRestaurantId = async (req: any, res: any) => {
  try {
    const { restaurant_id } = req.params;
    const result = await ProductModels.getAllByRestaurantId(restaurant_id);
    createLogger.info({
      model: "product/getAllByRestaurantId",
      data: req.body,
    });

    if (!result.success) {
      createLogger.error({
        model: "product/getAllByRestaurantId",
        error: result.error,
      });

      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }
    res.status(200).json(result);
  } catch (e: any) {
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};

const create = async (req: any, res: any) => {
  try {
    const {
      restaurant_id,
      name,
      img,
      price,
      favorite,
      description,
      ingredients,
    } = req.body;
    const result = await ProductModels.create(
      restaurant_id,
      name,
      img,
      price,
      favorite,
      description
    );

    createLogger.info({
      model: "product/create",
      data: req.body,
    });

    if (!result.success) {
      createLogger.error({
        model: "product/create",
        data: result.error,
      });
      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }
    const productId = result.data.id;

    for (const ingredient of ingredients) {
      const resultIngredient = await IngredientsModels.create(
        productId,
        ingredient.name
      );

      if (!resultIngredient.success) {
        createLogger.error({
          model: "/ingrdientes/create",
          data: result.error,
        });
        res
          .status(500)
          .json({ success: false, data: null, error: resultIngredient.error });
        return;
      }
    }

    const resultAll = await ProductModels.getAllByRestaurantId(restaurant_id);

    if (!resultAll.success) {
      createLogger.error({
        model: "product/getAllByRestaurantId",
        error: resultAll.error,
      });

      res
        .status(500)
        .json({ success: false, data: null, error: resultAll.error });
      return;
    }

    res.status(200).json(resultAll);
  } catch (e: any) {
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};

export { getAllByRestaurantId, create };
