import express, { Express } from "express";
import cors from "cors";
import * as routes from "./routes";
import { reqLogger } from "./middlewares/logger";
import { auth } from "./middlewares/auth";
import { Server } from "socket.io";
import { sockets } from "./utils/sockets";
import multer from "multer";
import http from "http";
import path from "path";
import config from "./utils/config";

const corsOptions = {
  origin: ["https://digidine-opcs.onrender.com"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type,Authorization", "Content-Type", "id"],
};

const corsOPtionsDev = {
  origin: [
    "http://localhost:3002",
    "http://localhost:3000",
    "https://digidine-opcs.onrender.com",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type,Authorization", "Content-Type", "id"],
};

function initializeMiddlewares(server: Express) {
  server.use(express.json({ limit: "100mb" }));
  if (config.node_env === "production") {
    server.use(cors(corsOptions));
  } else {
    server.use(cors(corsOPtionsDev));
  }
  server.use(express.urlencoded({ extended: true }));
  const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + path.extname(file.originalname));
    },
  });

  server.use(multer({ storage }).single("file"));
}

function initializeSockets(serverHttp: any) {
  const io = new Server(serverHttp, {
    cors: {
      origin: "http://localhost:3002",
    },
  });

  return io;
}

const routeMappings = [
  { path: "/api/user", router: routes.UserRouter },
  { path: "/api/comercio", router: routes.ComercioRouter },
  { path: "/api/file", router: routes.FileRouter },
  { path: "/api/category", router: routes.CategoryRouter },
  { path: "/api/product", router: routes.ProductRouter },
  // { path: "/api/gpt", router: routes.GPTRouter },
];

function initializeRoutes(server: Express) {
  routeMappings.forEach((route) => {
    server.use(route.path, auth, reqLogger, route.router);
  });
}

const server = express();
initializeMiddlewares(server);
initializeRoutes(server);
const serverHttp = http.createServer(server);
const io = initializeSockets(serverHttp);
sockets(io);

export default serverHttp;
