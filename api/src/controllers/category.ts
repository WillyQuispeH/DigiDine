import { Request, Response } from "express";

import createLogger from "../utils/logger";
import { v2 as cloudinary } from "cloudinary";
import config from "../utils/config";
import fs from "fs";

import * as CategoryModel from "../models/category";

cloudinary.config({
  cloud_name: config.cloudinary_name || "dzfg8xnxn",
  api_key: config.cloudinary_api_key || "734242724172826",
  api_secret: config.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});

const getByIdComercioId = async (req: Request, res: Response) => {
  try {
    const { comercio_id } = req.params;

    const result = await CategoryModel.getByIdComercio(comercio_id);

    res.status(200).json(result);
  } catch (e) {
    createLogger.error({
      controller: "category/getByComercio",
      error: (e as Error).message,
    });
    res
      .status(500)
      .json({ success: false, data: null, error: (e as Error).message });
  }
};

const updateImg = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res
        .status(200)
        .json({ success: true, data: null, error: "Falta Archivo" });
      return;
    }
    const { category_id, comercio_id } = req.body;
    const result = await cloudinary.uploader.upload(file.path);

    fs.unlinkSync(file.path);

    createLogger.info({
      model: "file/add",
      data: req.body,
    });

    const resultModel = await CategoryModel.updateImg(result.url, category_id);

    createLogger.info({
      model: "category/updateImg",
      data: req.body,
    });

    const resultAll = await CategoryModel.getByIdComercio(comercio_id);

    createLogger.info({
      model: "category/getbyidcomercio",
      data: req.body,
    });

    res.status(200).json(resultAll);
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};
export { getByIdComercioId, updateImg };
