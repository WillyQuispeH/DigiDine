import pool from "../utils/database";
import bcrypt from "bcrypt";

const create = async (
  email: string,
  name: string,
  paternallastname: string,
  maternalLastName: string,
  phone: string,
  avatar: string
) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app.person (email, "name", paternallastname, maternallastname, phone, avatar)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (email)
      DO UPDATE SET
        "name" = EXCLUDED."name",
        paternallastname = EXCLUDED.paternallastname,
        maternallastname = EXCLUDED.maternallastname,
        phone = EXCLUDED.phone,
        avatar = EXCLUDED.avatar RETURNING *;
      `,
      [email, name, paternallastname, maternalLastName, phone, avatar]
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
