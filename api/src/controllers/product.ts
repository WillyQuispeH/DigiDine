import createLogger from "../utils/logger";
import { Response, Request } from "express";
import config from "../utils/config";

import * as ProductModels from "../models/product";
import * as IngredientsModels from "../models/ingredients";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: config.cloudinary_name || "dzfg8xnxn",
  api_key: config.cloudinary_api_key || "734242724172826",
  api_secret: config.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});

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

const create = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      res
        .status(200)
        .json({ success: true, data: null, error: "Falta Archivo" });
      return;
    }

    const { restaurant_id, name, price, favorite, description, ingredients } =
      req.body;

    if (!file) {
      res
        .status(200)
        .json({ success: true, data: null, error: "Falta Archivo" });
      return;
    }

    const resultFile = await cloudinary.uploader.upload(file.path);

    fs.unlinkSync(file.path);

    createLogger.info({
      model: "file/add",
      data: req.body,
    });

    const result = await ProductModels.create(
      restaurant_id,
      name,
      resultFile.url,
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
    const ingredientsArray = JSON.parse(ingredients);

    for (const ingredient of ingredientsArray) {
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
