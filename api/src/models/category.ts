import pool from "../utils/database";
import bcrypt from "bcrypt";

const getByIdComercio = async (comercio_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `SELECT app.fn_category_get_by_id($1)::jsonb AS "data";`,
      [comercio_id]
    );
    return {
      success: true,
      data: resultDataBase.rows[0].data || null,
      error: null,
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: (e as Error).message,
    };
  }
};

const updateImg = async (img: string, category_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `UPDATE app.category
      SET  img=$2
      WHERE id=$1;
      `,
      [category_id, img]
    );
    return {
      success: true,
      data: resultDataBase.rows || null,
      error: null,
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: (e as Error).message,
    };
  }
};

const updateOrder = async (order: number, category_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `UPDATE app.category SET  "order"= $2 WHERE id=$1;`,
      [category_id, order]
    );
    return {
      success: true,
      data: resultDataBase.rows || null,
      error: null,
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: (e as Error).message,
    };
  }
};

const create = async (
  name: string,
  img: string,
  comercio_id: string,
  classe: string,
  description: string,
  order: number
) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app.category ("name", img, comercio_id, "classe", description, "order")
      VALUES ( $1, $2, $3, $4, $5, $6)
      ON CONFLICT ("name", comercio_id)
      DO UPDATE SET
          img = EXCLUDED.img,
          "classe" = EXCLUDED."classe",
          description = EXCLUDED.description,
          "order" = EXCLUDED."order" RETURNING *;`,
      [name, img, comercio_id, classe, description, order]
    );
    return {
      success: true,
      data: resultDataBase.rows[0] || null,
      error: null,
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: (e as Error).message,
    };
  }
};
const deleteById = async (category_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `DELETE FROM app.category WHERE id=$1 ;`,
      [category_id]
    );

    const result = await pool.query(
      `DELETE FROM app."productCategory" WHERE category_id=$1 ;`,
      [category_id]
    );

    return {
      success: true,
      data: resultDataBase.rows || null,
      error: null,
    };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: (e as Error).message,
    };
  }
};

export { getByIdComercio, updateImg, create, deleteById, updateOrder };
