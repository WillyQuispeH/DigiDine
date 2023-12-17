import pool from "../utils/database";
const getAllByRestaurantId = async (restaurant_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `SELECT app.fn_product_get_all_restaurant_id($1)::jsonb AS "data"`,
      [restaurant_id]
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

const create = async (
  restaurant_id: string,
  name: string,
  img: string,
  price: number,
  favorite: number,
  description: string
) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app.product
        (restaurant_id, "name", img, price, favorite, description)
        VALUES( $1, $2, $3, $4, $5, $6) RETURNING *;`,
      [restaurant_id, name, img, price, favorite, description]
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

export { getAllByRestaurantId, create };
