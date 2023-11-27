import { Request, Response } from "express";

import createLogger from "../utils/logger";
import * as ComercioModels from "../models/comercio";
import { IPerson } from "../types/person";
import { IRestaurant } from "../types/restaurant";
import { format } from "date-fns";

const create = async (req: Request, res: Response) => {
  try {
    const { person, restaurant }: { person: IPerson; restaurant: IRestaurant } =
      req.body;

    const fechaActual = format(new Date(), "dd/MM/yyyy");

    console.log(fechaActual);

    const result = await ComercioModels.create(
      person.name,
      person.paternalLastName,
      person.maternalLastName,
      person.email,
      person.phone,
      fechaActual.toString(),
      restaurant.name,
      restaurant.district,
      restaurant.address,
      restaurant.open,
      restaurant.close,
      restaurant.phone,
      restaurant.web,
      restaurant.email,
      restaurant.wifi,
      restaurant.logo,
      person.password
    );

    if (!result.success) {
      createLogger.error({
        model: "comercio/create",
        error: result.error,
      });
      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    createLogger.error({
      controller: "comercio",
      error: (e as Error).message,
    });
    res
      .status(500)
      .json({ success: true, data: null, error: (e as Error).message });
  }
};
const getByPersonId = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const { person_id } = req.params;

    const result = await ComercioModels?.getByPersonId(person_id);

    if (!result.success) {
      createLogger.error({
        model: "comercio/getByPersonId",
        error: result.error,
      });
      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    createLogger.error({
      controller: "comercio/getByPersonId",
      error: (e as Error).message,
    });
    res
      .status(500)
      .json({ success: true, data: null, error: (e as Error).message });
  }
};

export { create, getByPersonId };
