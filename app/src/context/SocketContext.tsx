"use client";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useSocket } from "@/hooks/useSockets";

const SocketContext = createContext<any>(null);

const SocketProvider = ({ children }: any) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "https://digidine-opcs.onrender.com/"
  );

  const login = true;

  useEffect(() => {
    if (login) {
      conectarSocket();
    }
  }, [login, conectarSocket]);

  useEffect(() => {
    if (!login) {
      desconectarSocket();
    }
  }, [login, desconectarSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };
export default SocketContext;
