import pool from "../utils/database";
import bcrypt from "bcrypt";

const validate = async (email: string, password: string) => {
  try {
    const resultDataBase = await pool.query(
      `select  p.email, u."password" , u.person_id , u.id  from app.person p
       inner join app."user" u on u.person_id = p.id 
       where p.email = $1;
      `,
      [email]
    );

    if (resultDataBase.rowCount === 0) {
      return {
        id: "",
        person_id: "",
        email: "",
      };
    }
    const {
      password: hash,
      id,
      person_id,
      email: userEmail,
    } = resultDataBase.rows[0];
    const isMatch = await bcrypt.compare(password, hash);

    if (isMatch) {
      return {
        id,
        person_id,
        email: userEmail,
      };
    }

    return { id: "", person_id: "", email: "" };
  } catch (e) {
    return {
      success: false,
      data: null,
      error: "No encontramos tu cuenta en nuestro sistema",
    };
  }
};

export { validate };
