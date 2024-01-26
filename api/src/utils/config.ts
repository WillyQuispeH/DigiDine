import cnf from "dotenv";

cnf.config();

const config = {
  api_port: process.env.API_PORT,
  api_key: process.env.API_KEY,
  node_env: process.env.NODE_ENV,

  db_user: process.env.DB_USER,
  db_host: process.env.DB_HOST,
  db_database: process.env.DB_DATABASE,
  db_password: process.env.DB_PASSWORD,

  cloudinary_name: process.env.CLOUD_NAME || "",
  cloudinary_api_key: process.env.CLOUD_API_KEY || "",
  cloudinary_secret: process.env.CLOUD_API_SECRET || "",

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

export default config;
