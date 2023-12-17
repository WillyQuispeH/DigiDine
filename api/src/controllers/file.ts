import createLogger from "../utils/logger";
import { v2 as cloudinary } from "cloudinary";
import config from "../utils/config";
import { Response, Request } from "express";
import fs from "fs";

cloudinary.config({
  cloud_name: config.cloudinary_name || "dzfg8xnxn",
  api_key: config.cloudinary_api_key || "734242724172826",
  api_secret: config.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});

const add = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res
        .status(200)
        .json({ success: true, data: null, error: "Falta Archivo" });
      return;
    }

    const result = await cloudinary.uploader.upload(file.path);

    fs.unlinkSync(file.path);

    createLogger.info({
      model: "file/add",
      data: req.body,
    });

    const dataToSend = {
      url: result.url,
      public_id: result.public_id,
    };

    res.status(200).json({ success: true, data: dataToSend, error: null });
  } catch (e: any) {
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};

const remove = async (req: any, res: any) => {
  try {
    const { public_id } = req.body;
    const result = await cloudinary.uploader.destroy(public_id);

    createLogger.info({
      model: "file/remove",
      data: req.body,
    });
    res.status(200).json({ success: true, data: result, error: null });
  } catch (e: any) {
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};

export { add, remove };
