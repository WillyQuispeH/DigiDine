import { Server, Socket } from "socket.io";

function sockets(io: any) {
  io.on("connection", async (socket: Socket) => {
    console.log("Cliente conectado");
  });
}

export { sockets };
