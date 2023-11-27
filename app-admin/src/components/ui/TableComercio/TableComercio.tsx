"use client";
import { IComercio } from "@/interfaces/comercio";
import { useComercio } from "@/store/hooks";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./TableComercio.module.scss";

const TableComercio = () => {
  const { getByPersonId, listComercio, comercio, setComercio } = useComercio();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.person_id)
      getByPersonId(session?.user?.person_id as string);
  }, [session?.user?.person_id]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  const handleEditComercio = (comercio_id: string) => {
    const comercio = listComercio.find(
      (item: IComercio) => item.comercio.id === comercio_id
    );
    setComercio(comercio as IComercio);
    if (comercio) router.push(`/dashboard/${comercio_id}`);
  };

  return (
    <div className={styles.contenMainComercials}>
      <div className={styles.tableComercials}>
        {listComercio.map((comercio: IComercio) => (
          <div key={comercio.comercio.id}>
            <h1>{comercio.restaurant.name}</h1>
            <h1>{comercio.comercio.id}</h1>
            <button onClick={() => handleEditComercio(comercio.comercio.id)}>
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComercio;
