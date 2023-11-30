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

export { getByIdComercio, updateImg };
