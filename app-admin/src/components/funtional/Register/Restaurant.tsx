"use client";
import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { useFile, useRestaurant } from "@/store/hooks";
import { Column, Row } from "@/components/layout/Generic";
import ComboBox from "@/components/ui/ComboBox";
import useDistrict from "@/store/hooks/useDistrict";
import File from "@/components/ui/File";

type ITarget = React.ChangeEvent<HTMLInputElement>;

const initData = {
  name: true,
  district: true,
  address: true,
  open: true,
  close: true,
  phone: true,
  web: true,
  email: true,
  wifi: true,
  logo: true,
};

const Restaurant = () => {
  const { restaurant, setRestaurant, isValidRestaurant } = useRestaurant();
  const [valid, setValid] = useState(initData);
  const [fileName, setFileName] = useState("");
  const { getAllDistrict, districtList } = useDistrict();
  const { addFile, file, loadingFile } = useFile();

  const handleOnchange = ({ target }: ITarget) => {
    const { name, value } = target;
    setRestaurant({ ...restaurant, [name]: value });
    setValid({ ...valid, [name]: value !== "" });
  };

  const handleOnchangeFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    addFile(formData);
  };

  useEffect(() => {
    if (file.public_id) {
      setRestaurant({ ...restaurant, logo: file.url });
      setValid({ ...valid, logo: true });
      setFileName(file.public_id);
    }
  }, [file]);

  useEffect(() => {
    if (districtList) {
      getAllDistrict();
    }
  }, []);

  return (
    <Form title="Mi restaurant" isValid={isValidRestaurant}>
      <Column gap="5px">
        <Input
          onChange={handleOnchange}
          value={restaurant.name}
          type="text"
          label="Nombre"
          width="286px"
          name="name"
          isValid={valid.name}
        />
        <ComboBox
          label="Comuna"
          data={districtList}
          onChange={handleOnchange}
          value={restaurant.district}
          name="district"
          textName="name"
          valueName="value"
          isValid={valid.district ? "comboBox" : "unComboBox"}
          width="286px"
        />

        <Input
          onChange={handleOnchange}
          value={restaurant.address}
          type="text"
          label="Dirección"
          width="286px"
          name="address"
          isValid={valid.address}
        />

        <Row gap="5px">
          <Input
            onChange={handleOnchange}
            value={restaurant.open}
            type="text"
            label="Abre"
            width="140px"
            name="open"
            isValid={valid.open}
          />
          <Input
            onChange={handleOnchange}
            value={restaurant.close}
            type="text"
            label="Cierre"
            width="139px"
            name="close"
            isValid={valid.close}
          />
        </Row>

        <Input
          onChange={handleOnchange}
          value={restaurant.email}
          type="text"
          label="Correo electronico"
          width="286px"
          name="email"
          isValid={valid.email}
        />

        <Row gap="5px">
          <Input
            onChange={handleOnchange}
            value={restaurant.wifi}
            type="text"
            label="Wifi"
            width="139px"
            name="wifi"
            isValid={valid.wifi}
          />
          <Input
            onChange={handleOnchange}
            value={restaurant.phone}
            type="text"
            label="Teléfono"
            width="140px"
            name="phone"
            isValid={valid.phone}
          />
        </Row>

        <Input
          onChange={handleOnchange}
          value={restaurant.web}
          type="text"
          label="Pagina Web"
          width="286px"
          name="web"
          isValid={valid.web}
        />
        <File
          width="286px"
          name="logo"
          label="Logo"
          nameFile={fileName}
          onFilesSelected={handleOnchangeFile}
          loading={loadingFile}
        />
      </Column>
    </Form>
  );
};

export default Restaurant;
