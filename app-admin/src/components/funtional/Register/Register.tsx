"use client";
import React, { useEffect } from "react";
import styles from "./Register.module.scss";
import Person from "./Person";
import Restaurant from "./Restaurant";
import Button from "@/components/ui/Button";
import { useComercio, usePerson, useRestaurant } from "@/store/hooks";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
  const { restaurant, isValidRestaurant } = useRestaurant();
  const { person, isValidPerson } = usePerson();
  const { createComercio, loadingComercio, comercio } = useComercio();

  const router = useRouter();

  const handleOnClickCreate = () => {
    createComercio(person, restaurant);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (restaurant.id && person.id && comercio.comercio.id) {
        try {
          const responseNextAuth = await signIn("credentials", {
            email: person.email,
            password: person.password,
            redirect: false,
          });
          router.push("/dashboard");
        } catch (error) {
          console.error("Error during sign-in:", error);
        }
      }
    };

    fetchData(); // Call the asynchronous function
  }, [restaurant, person, comercio]);

  return (
    <div className={styles.register}>
      <div className={styles.registerContent}>
        <Person />
        <Restaurant />
      </div>
      <div className={styles.contentButton}>
        <Button
          valor="Registrar"
          onClick={handleOnClickCreate}
          width="180px"
          height="40px"
          loader={loadingComercio}
          disabled={isValidPerson && isValidRestaurant ? false : true}
        />
      </div>
    </div>
  );
};

export default Register;
