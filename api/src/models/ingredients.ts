import pool from "../utils/database";

const create = async (product_id: string, name: string) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app.ingredients
      ( product_id, "name") VALUES($1, $2);`,
      [product_id, name]
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

export { create };
