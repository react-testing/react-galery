import { memo, useState, useCallback } from "react";
import ModalImage from "../Modals/ModalImage";

function Image({ src }) {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <div className="img" onClick={toggleOpen}>
        <div className="img-figure">
          <img src={src} alt={src} loading="lazy"/>
        </div>
        <div className="img-info">
          <a href={src} target="_blank" rel="noreferrer">
            Libardo Rengifo
          </a>
        </div>
      </div>
      <ModalImage src={src} toggleOpen={toggleOpen} isOpen={isOpen} />
    </>
  );
}

export default memo(Image);
