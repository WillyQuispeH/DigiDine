import { useReactTable } from "@tanstack/react-table";
import dataOver from "@/data/MOCK_DATA.json";

import React from "react";

interface IColumn {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

const Table = () => {
  const data: IColumn[] = dataOver;
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Nombres",
      accessorKey: "first_name",
    },
    {
      header: "Segundo nombres",
      accessorKey: "last_name",
    },
    {
      header: "Correo electronico",
      accessorKey: "email",
    },
    {
      header: "Gneder",
      accessorKey: "gender",
    },
    {
      header: "Direccion mac",
      accessorKey: "ip_address",
    },
  ];

  // useReactTable({ data, columns });

  return <div>Table</div>;
};

export default Table;
