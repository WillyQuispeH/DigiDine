import React from "react";

import styles from "./ScreenLoader.module.scss";
import LoaderLogo from "@/components/ui/LoaderLogo";

interface IScreenLoader {
  active: boolean;
}

const ScreenLoader = ({ active }: IScreenLoader) => {
  if (!active) {
    return null;
  }

  return (
    <div className={styles.screenLoader}>
      <LoaderLogo width="70px" text="Cargando" />
    </div>
  );
};

export default ScreenLoader;
