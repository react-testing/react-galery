import { memo, useState } from "react";
import css from "../Style.module.scss";
import { BiImages } from "react-icons/bi";
import Btn from "../../Elements/Btn";
import { uploadImage } from "../../../Helpers/api";
import ErrorText from "../../Elements/ErrorText";

function Upload() {
  const [error, setError] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      await uploadImage(data);
    } catch {
      setError(true);
    }
  }

  return (
    <div className={css.container}>
      <h2>Subir imágenes</h2>
      <p className={css.lead}>
        Selecciona archivos de imágen, no deben de sobrepasar los{" "}
        <strong>3mb</strong> de peso.
      </p>

      <form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        <div className={css.group}>
          <BiImages className={css.groupIcon} />
          <input
            type="file"
            accept="image/*"
            name="images"
            id="images"
            required
            multiple
          />
        </div>

        <ErrorText
          isVisible={error}
          text="Ocurrió un error, verifica tu conexión."
        />
        <div className="group">
          <Btn type="submit" disabled={false}>
            <div className={css.buttonContent}>
              <span>Subir</span>
              {/* {upload.isLoading && (
                <Loader height={20} width={20} color="#fff" type="Oval" />
              )} */}
            </div>
          </Btn>
        </div>
      </form>
    </div>
  );
}

export default memo(Upload);
