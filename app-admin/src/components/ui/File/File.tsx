import React from "react";
import styles from "./File.module.scss";
import Loader from "../Loader";

interface IFiles extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
  label: string;
  nameFile: string;
  loading: boolean;
  onFilesSelected: (file: File) => void;
}

const File = React.forwardRef<HTMLInputElement, IFiles>(
  (
    {
      className,
      nameFile,
      label,
      width,
      name,
      onFilesSelected,
      loading,
      ...props
    },
    ref
  ) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const file = e.target.files[0];
        onFilesSelected(file);
      }
    };

    return (
      <div className={styles.file} style={{ width }}>
        <p>{label}</p>
        <h1>{nameFile}</h1>
        <label htmlFor={name}>
          {loading ? (
            <div className={styles.contentLoader}>
              <Loader width="30px" />
            </div>
          ) : (
            <span className="material-symbols-outlined">cloud_upload</span>
          )}
        </label>

        <input
          type="file"
          name={name}
          id={name}
          ref={ref}
          {...props}
          onChange={handleFileChange}
        />
      </div>
    );
  }
);

File.displayName = "Input";

export default File;
