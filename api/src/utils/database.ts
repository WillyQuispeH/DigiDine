import pg from "pg";
import path from "path";
import fs from "fs";

import config from "./config";
import createLogger from "../utils/logger";

const { Pool } = pg;

const pool = new Pool({
  user: config.db_user,
  host: config.db_host,
  database: config.db_database,
  password: config.db_password,
  port: 5432,
  keepAlive: true,
  ssl:
    process.env.NODE_ENV === "develop"
      ? false
      : {
          ca: fs.readFileSync(path.join(__dirname, "/certificate.crt")),
        },
});

pool.connect(function (err) {
  if (err) {
    createLogger.error(`ERROR connecting to Database: ${err}`);
  } else {
    createLogger.info(`Connected to Database`);
  }
});

export default pool;
