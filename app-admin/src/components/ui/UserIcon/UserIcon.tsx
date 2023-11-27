import React from "react";
import styles from "./UserIcon.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonIcon from "../ButtonIcon";
import config from "@/util/config";

const UserIcon = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userIcon}>
      <ButtonIcon
        onClick={async () =>
          await signOut({ callbackUrl: config.NEXTAUTH_URL })
        }
        width="50px"
        height="50px"
        icon="logout"
      />
      <div className={styles.userIconInfo}>
        <h1>{session?.user.email}</h1>
        <p>{session?.user?.exp}</p>
      </div>
    </div>
  );
};

export default UserIcon;
