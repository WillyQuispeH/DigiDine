import pool from "../utils/database";
import bcrypt from "bcrypt";

const create = async (
  person_name: string,
  paternalLastName: string,
  maternalLastName: string,
  person_email: string,
  person_phone: string,
  comercio_date: string,
  restaurant_name: string,
  district: string,
  address: string,
  open: string,
  close: string,
  restaurant_phone: string,
  web: string,
  restaurant_email: string,
  wifi: string,
  logo: string,
  password: string
) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const resultDataBase = await pool.query(
      `SELECT app.fn_comercio_person_user_restaurant_create
      (
        $1, 
        $2, 
        $3, 
        $4, 
        $5, 
        $6, 
        $7, 
        $8, 
        $9, 
        $10, 
        $11, 
        $12, 
        $13, 
        $14, 
        $15, 
        $16, 
        $17
        )::jsonb AS "data";
      `,
      [
        person_name,
        paternalLastName,
        maternalLastName,
        person_email,
        person_phone,
        comercio_date,
        restaurant_name,
        district,
        address,
        open,
        close,
        restaurant_phone,
        web,
        restaurant_email,
        wifi,
        logo,
        hash,
      ]
    );

    return {
      success: true,
      data: resultDataBase.rows[0].data || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

const getByPersonId = async (person_id: string) => {
  try {
    const resultDataBase = await pool.query(
      `SELECT app.fn_comercios_get_by_person_id($1)::jsonb AS "data";`,
      [person_id]
    );
    return {
      success: true,
      data: resultDataBase.rows[0].data || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

export { create, getByPersonId };
