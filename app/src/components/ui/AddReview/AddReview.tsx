import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalTitle, Overlay } from "../Modal";

import styles from "./AddReview.module.scss";
import ButtonIcon from "../ButtonIcon";
import BtnIconText from "../BtnIconText";
import Input from "../Input";
import { Column } from "@/components/layout/Generic";
import TextTarea from "../TextTarea";
import Button from "../Button";
import { useParams } from "next/navigation";
import { useProduct } from "@/store/hooks";
import { isValidEmail, isValidPhone } from "@/utils/validate";

type TTarget = React.ChangeEvent<HTMLInputElement>;
type TTargetText = React.ChangeEventHandler<HTMLTextAreaElement>;

const AddReview = () => {
  const initData = {
    name: { value: "", isValid: true },
    paternalLastName: { value: "", isValid: true },
    maternalLastName: { value: "", isValid: true },
    email: { value: "", isValid: true },
    phone: { value: "", isValid: true },
    review: { value: "", isValid: true },
  };
  const [form, setForm] = useState(initData);
  const [modal, setModal] = useState(false);
  const [valid, setValid] = useState(false);
  const params = useParams();
  const { loadingProduct, createReview } = useProduct();

  const handleOnChange = ({ target }: TTarget) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: { value, isValid: value !== "" ? true : false },
    });
  };

  const handleOnChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: { value, isValid: value !== "" },
    });
  };

  const handleOnchangePhone = ({ target }: TTarget) => {
    const { value, name } = target;
    let inputValue = value;

    if (inputValue.length > 9) {
      inputValue = inputValue.slice(0, 9);
    }

    setForm({
      ...form,
      [name]: {
        value: inputValue.replace(/[^\d.]/g, ""),
        isValid: isValidPhone(inputValue.trim()),
      },
    });
  };

  const handleOnchangeEmail = ({ target }: TTarget) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: { value, isValid: isValidEmail(value.trim()) },
    });
  };

  const handleCreate = async () => {
    if (params.productId && valid) {
      await createReview(
        params.productId as string,
        form.name.value,
        form.paternalLastName.value,
        form.maternalLastName.value,
        form.email.value,
        form.phone.value,
        form.review.value
      );
      setModal(false);
      setForm(initData);
    }
  };

  useEffect(() => {
    if (
      form.name.value !== "" &&
      form.name.isValid &&
      form.paternalLastName.value !== "" &&
      form.paternalLastName.isValid &&
      form.maternalLastName.value !== "" &&
      form.maternalLastName.isValid &&
      form.email.value !== "" &&
      form.email.isValid &&
      form.phone.value !== "" &&
      form.phone.isValid &&
      form.review.value !== "" &&
      form.review.isValid
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [form]);

  return (
    <>
      <div className={styles.addReviews}>
        <h1>Reseñas</h1>

        <BtnIconText
          onClick={() => setModal(true)}
          icon="draw"
          width="80px"
          text="Nuevo"
        />
      </div>
      <Overlay active={modal}>
        <Modal>
          <ModalTitle title="Nueva reseña">
            <ButtonIcon
              onClick={() => setModal(false)}
              icon="close"
              width="30px"
              height="30px"
            />
          </ModalTitle>
          <ModalBody>
            <div className={styles.contentFormReview}>
              <Column gap="5px">
                <Input
                  value={form.name.value}
                  onChange={handleOnChange}
                  label="Nombre"
                  width="290px"
                  isValid={form.name.isValid}
                  name="name"
                />
                <Input
                  value={form.paternalLastName.value}
                  onChange={handleOnChange}
                  label="Apellido paterno"
                  width="290px"
                  isValid={form.paternalLastName.isValid}
                  name="paternalLastName"
                />
                <Input
                  value={form.maternalLastName.value}
                  onChange={handleOnChange}
                  label="Apellido materno"
                  width="290px"
                  isValid={form.maternalLastName.isValid}
                  name="maternalLastName"
                />
                <Input
                  value={form.email.value}
                  onChange={handleOnchangeEmail}
                  label="Correo electrónico"
                  width="290px"
                  isValid={form.email.isValid}
                  name="email"
                />
                <Input
                  value={form.phone.value}
                  onChange={handleOnchangePhone}
                  label="Teléfono"
                  width="290px"
                  type="number"
                  isValid={form.phone.isValid}
                  name="phone"
                />
                <TextTarea
                  value={form.review.value}
                  onChange={handleOnChangeText}
                  label="Comentario"
                  width="290px"
                  height="150px"
                  rows={7}
                  isValid={form.review.isValid}
                  name="review"
                  style={{ resize: "none" }}
                />
              </Column>
              <Button
                onClick={() => handleCreate()}
                width="150px"
                valor="Comentar"
                height="50px"
                disabled={!valid}
                loader={loadingProduct}
              />
            </div>
          </ModalBody>
        </Modal>
      </Overlay>
    </>
  );
};

export default AddReview;
