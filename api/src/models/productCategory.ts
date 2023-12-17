import pool from "../utils/database";
import bcrypt from "bcrypt";

const create = async (category_id: string, product_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app."productCategory" ( product_id, category_id)
      VALUES ($1, $2)
      ON CONFLICT (category_id, product_id) DO NOTHING;`,
      [product_id, category_id]
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

const remove = async (category_id: string, product_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `DELETE FROM app."productCategory"
        WHERE category_id = $1 AND product_id = $2;`,
      [category_id, product_id]
    );
    return {
      success: true,
      data: resultDataBase.rowCount || null,
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

export { create, remove };
