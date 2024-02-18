import app from "./app";
import config from "./utils/config";
import createLogger from "./utils/logger";

app.listen(config.api_port);
createLogger.info(`API listening port ${config.api_port}`);
