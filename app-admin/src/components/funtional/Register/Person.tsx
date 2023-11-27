"use client";
import { Column, Row } from "@/components/layout/Generic";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import React, { useState } from "react";
import { usePerson } from "@/store/hooks";

import { unFormatRut, formatRut } from "@/util/format";
import { isValidEmail, isValidRut } from "@/util/validate";
import styles from "./Register.module.scss";

const initValid = {
  name: true,
  paternalLastName: true,
  maternalLastName: true,
  email: true,
  phone: true,
  password: true,
};

type ITarget = React.ChangeEvent<HTMLInputElement>;

const Person = () => {
  const { setPerson, person, isValidPerson } = usePerson();
  const [valid, setValid] = useState(initValid);

  const handleOnchange = ({ target }: ITarget) => {
    const { value, name } = target;
    setPerson({ ...person, [name]: value });
    setValid({ ...valid, [name]: value !== "" });
  };

  const handleOnchangePhone = ({ target }: ITarget) => {
    const { value, name } = target;
    let inputValue = value;

    if (inputValue.length > 9) {
      inputValue = inputValue.slice(0, 9);
    }
    setPerson({ ...person, [name]: inputValue.replace(/[^\d.]/g, "") });
  };

  const handleOnchangeEmail = ({ target }: ITarget) => {
    const { value, name } = target;
    setPerson({ ...person, [name]: value });
    setValid({ ...valid, [name]: isValidEmail(value.trim()) });
  };

  return (
    <Form title="Mis datos" isValid={isValidPerson}>
      <Column gap="5px">
        <Input
          onChange={handleOnchange}
          value={person.name}
          type="text"
          label="Nombre"
          width="286px"
          name="name"
          isValid={valid.name}
        />
        <Input
          onChange={handleOnchange}
          value={person.paternalLastName}
          type="text"
          label="Apellido paterno"
          width="286px"
          name="paternalLastName"
          isValid={valid.paternalLastName}
        />
        <Input
          onChange={handleOnchange}
          value={person.maternalLastName}
          type="text"
          label="Apellido materno"
          width="286px"
          name="maternalLastName"
          isValid={valid.maternalLastName}
        />
        <Input
          onChange={handleOnchangeEmail}
          value={person.email}
          type="text"
          label="Correo electronico"
          width="286px"
          name="email"
          isValid={valid.email}
        />
        <Input
          onChange={handleOnchangePhone}
          value={person.phone}
          type="text"
          label="Teléfono"
          width="286px"
          name="phone"
          isValid={valid.phone}
        />
        <Input
          onChange={handleOnchange}
          value={person.password}
          type="text"
          label="Contraseña"
          width="286px"
          name="password"
          isValid={valid.password}
        />
      </Column>
    </Form>
  );
};

export default Person;
