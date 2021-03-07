import { memo } from "react";
import css from "../Style.module.scss";
import { BiImages } from "react-icons/bi";
import Btn from "../../Elements/Btn";
function Upload() {
  function handleOnSubmit() {}

  return (
    <div className={css.container}>
      <h2>Subir imágenes</h2>
      <p className={css.lead}>
        Selecciona archivos de imágen, no deben de sobrepasar los{" "}
        <strong>3mb</strong> de peso.
      </p>

      <form autoComplete="off" onSubmit={handleOnSubmit}>
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

        {/* {upload.isError && (
          <div
            className={css.group}
            style={{ display: "flex", alignContent: "center" }}
          >
            <BiErrorCircle style={{ fill: "#ff005c" }} />
            <small>
              <span style={{ color: "#ff005c", marginLeft: "5px" }}>
                Ocurrió un error, verifica tus datos.
              </span>
            </small>
          </div>
        )} */}

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
