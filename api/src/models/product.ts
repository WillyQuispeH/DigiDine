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

const addFavorite = async (product_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `UPDATE app.product
      SET favorite = favorite + 1
      WHERE id = $1 RETURNING *; `,
      [product_id]
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

const getById = async (product_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `SELECT app.fn_product_get_id($1)::jsonb AS "data";`,
      [product_id]
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

const createReview = async (
  product_id: string,
  person_id: string,
  review: string
) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app."productReviews"
      ( product_id, person_id, review, "isActive", "date")
      VALUES( $1, $2, $3, true, CURRENT_TIMESTAMP); `,
      [product_id, person_id, review]
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

export { getAllByRestaurantId, create, addFavorite, getById, createReview };
