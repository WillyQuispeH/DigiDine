import { Request, Response } from "express";

import createLogger from "../utils/logger";
import * as ComercioModels from "../models/comercio";
import * as CategoryProductModels from "../models/productCategory";
import * as CategoryModels from "../models/category";
import { IPerson } from "../types/person";
import { IRestaurant } from "../types/restaurant";
import { format } from "date-fns";
import { ICategory, IComercio, IProduct } from "../types/comercio";

const create = async (req: Request, res: Response) => {
  try {
    const { person, restaurant }: { person: IPerson; restaurant: IRestaurant } =
      req.body;

    const fechaActual = format(new Date(), "dd/MM/yyyy");

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
    const { person_id } = req.params;

    const result = await ComercioModels.getByPersonId(person_id);

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
const getById = async (req: Request, res: Response) => {
  try {
    const { comercio_id } = req.params;

    const result = await ComercioModels.getById(comercio_id);

    if (!result.success) {
      createLogger.error({
        model: "comercio/getById",
        error: result.error,
      });
      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    createLogger.error({
      controller: "comercio/getById",
      error: (e as Error).message,
    });
    res
      .status(500)
      .json({ success: true, data: null, error: (e as Error).message });
  }
};

const updateCategoryProduct = async (req: Request, res: Response) => {
  try {
    const { comercio }: { comercio: IComercio } = req.body;

    const category = comercio.category;

    const result = category.map((category: ICategory) => ({
      id: category.id,
      order: category.order,
      products: (category?.products || []).map((product: IProduct) => ({
        id: product.id,
      })),
    }));

    const responseRemove = await removeData(result as ICategory[]);
    const resposne = await insertData(result as ICategory[]);

    let iterador = 1;

    for (const category of result) {
      const categoryId = category.id;

      const resultUpdateOrder = await CategoryModels.updateOrder(
        iterador,
        categoryId
      );

      // Incrementar el iterador para la siguiente iteración
      iterador++;
    }

    // if (!result.success) {
    //   createLogger.error({
    //     model: "comercio/getById",
    //     error: result.error,
    //   });
    //   res.status(500).json({ success: false, data: null, error: result.error });
    //   return;
    // }

    res.status(200).json("result");
  } catch (e) {
    createLogger.error({
      controller: "comercio/updateCategoryProduct",
      error: (e as Error).message,
    });
    res
      .status(500)
      .json({ success: true, data: null, error: (e as Error).message });
  }
};

export { create, getByPersonId, getById, updateCategoryProduct };

const removeData = async (result: ICategory[]) => {
  for (const categoryResult of result) {
    const categoryId = categoryResult.id;

    const result = await CategoryProductModels.remove(categoryId);
    if (!result.success) {
      createLogger.error({
        model: "categoryProductModels/remove",
        error: result.error,
      });
    }
  }
};

const insertData = async (result: ICategory[]) => {
  for (const categoryResult of result) {
    const categoryId = categoryResult.id;
    const products = categoryResult.products || [];

    for (const productResult of products) {
      const productId = productResult.id;

      const result = await CategoryProductModels.create(categoryId, productId);
      if (!result.success) {
        createLogger.error({
          model: "categoryProductModels/create",
          error: result.error,
        });
      }
    }
  }
};
