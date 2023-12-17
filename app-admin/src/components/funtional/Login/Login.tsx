"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./Login.module.scss";
import Button from "@/components/ui/Button";
import useAuth from "@/store/hooks/useAuth";
import Input from "@/components/ui/Input";
import { Column} from "@/components/layout/Generic";

const Login = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState("taoQuispe@gmial.com");
  const [password, setPassword] = useState("957902342");
  const { loadingAuth } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };
  return (
    <div className={styles.login}>
      <div className={styles.contenImg}>
        <img src="./foto4.jpg" alt="" />
      </div>
      <div className={styles.contenLogin}>
        <img className={styles.logoGaman} src="./logo.png" alt="" />
        <h1>Ingresar</h1>
        <form onSubmit={handleSubmit}>
          <Column gap="10px">
            <Column gap="5px">
              <Input
                label="Correo Electrónico"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                width="250px"
                height="50px"
                isValid={true}
              />

              <Input
                label="Contraseña"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                width="250px"
                height="50px"
                isValid={true}
              />
            </Column>
            <div className={styles.contenButtonLogin}>
              <Button
                onClick={handleSubmit}
                width="150px"
                valor="Ingresar"
                height="40px"
                loader={loadingAuth}
              />
            </div>
          </Column>
        </form>

        {errors.length > 0 && (
          <div className="alert alert-danger mt-2">
            <ul className="mb-0">
              {errors?.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
