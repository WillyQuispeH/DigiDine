"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./ImgCropper.module.scss";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImg";
import { useFile } from "@/store/hooks";
import { Column } from "@/components/layout/Generic";

interface IcropperPixels {
  x: number;
  y: number;
  width: number;
  height: number;
}

const ImgCropper = () => {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<IcropperPixels>({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const { setFileBlob } = useFile();

  const onCropComplete = React.useCallback(
    (croppedArea: any, croppedAreaPixels: IcropperPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );
  useEffect(() => {
    if (image) {
      croppedImagePro();
    }
  }, [croppedAreaPixels]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const croppedImagePro = async () => {
    if (image) {
      try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);

        if (croppedImage) {
          setFileBlob(croppedImage);
          setCroppedImage(URL.createObjectURL(croppedImage));
        }
      } catch (error: any) {
        console.error("Error al recortar la imagen", error);
        console.error("Error details:", error.message, error.stack);
      }
    }
  };

  useEffect(() => {
    const reactEasyCropContainers = document.getElementsByClassName(
      "reactEasyCrop_Container"
    );

    for (let i = 0; i < reactEasyCropContainers.length; i++) {
      const container = reactEasyCropContainers[i] as HTMLElement;
      container.style.borderRadius = "7px";
    }
  }, [onFileChange]);

  return (
    <div className={styles.imgCropper}>
      <div className={styles.contenentControlsCropper}>
        <div className={styles.contenControls}>
          <label htmlFor="fileCropper">
            <span className="material-symbols-outlined">file_present</span>
          </label>
          <input
            type="file"
            id="fileCropper"
            onChange={onFileChange}
            accept="image/*"
          />
        </div>
        <div className={styles.contenMainCrop}>
          {image ? (
            <div className={styles.cropContainer}>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={13 / 16}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined">cloud_upload</span>
              <p>Sube una foto de tu producto</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.contenPreview}>
        <h1>Imagen previa</h1>
        {croppedImage && <img src={croppedImage} alt="Imagen Recortada" />}
      </div>
    </div>
  );
};

export default ImgCropper;
