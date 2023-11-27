import { Request, Response } from "express";

import createLogger from "../utils/logger";

import * as UserModel from "../models/user";

const validate = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await UserModel.validate(email, password);

    res.status(200).json(result);
  } catch (e) {
    createLogger.error({
      controller: "statusIcert",
      error: (e as Error).message,
    });
    res.status(200).json({ success: true, data: "statusEcert", error: null });
  }
};
export { validate };
