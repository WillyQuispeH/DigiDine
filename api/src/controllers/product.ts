import createLogger from "../utils/logger";
import { Response, Request } from "express";
import config from "../utils/config";

import * as ProductModels from "../models/product";
import * as IngredientsModels from "../models/ingredients";
import * as PersonModels from "../models/person";
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

const addFavorite = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.body;
    const result = await ProductModels.addFavorite(product_id);
    createLogger.info({
      model: "product/addFavorite",
      data: req.body,
    });

    if (!result.success) {
      createLogger.error({
        model: "product/addFavorite",
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

const getById = async (req: any, res: any) => {
  try {
    const { product_id } = req.params;
    const result = await ProductModels.getById(product_id);
    createLogger.info({
      model: "product/getById",
      data: req.body,
    });

    if (!result.success) {
      createLogger.error({
        model: "product/getById",
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

const createReviews = async (req: Request, res: Response) => {
  try {
    const {
      product_id,
      name,
      parternalLastName,
      maternalLastName,
      email,
      phone,
      review,
    } = req.body;

    const resPerson = await PersonModels.create(
      email,
      name,
      parternalLastName,
      maternalLastName,
      phone,
      "https://png.pngtree.com/png-vector/20210224/ourlarge/pngtree-customer-login-avatar-png-image_2939385.jpg"
    );

    if (!resPerson.success) {
      createLogger.error({
        model: "person/create",
        error: resPerson.error,
      });

      res
        .status(500)
        .json({ success: false, data: null, error: resPerson.error });
      return;
    }

    const resReview = await ProductModels.createReview(
      product_id,
      resPerson.data.id,
      review
    );

    if (!resReview.success) {
      createLogger.error({
        model: "person/create",
        error: resReview.error,
      });

      res
        .status(500)
        .json({ success: false, data: null, error: resReview.error });
      return;
    }

    const result = await ProductModels.getById(product_id);
    createLogger.info({
      model: "product/getById",
      data: req.body,
    });

    if (!result.success) {
      createLogger.error({
        model: "product/getById",
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
export { getAllByRestaurantId, create, addFavorite, getById, createReviews };
