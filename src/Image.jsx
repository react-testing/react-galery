import { createRef, useEffect, memo, useState } from "react";
import lazyLoad from "./LazyLoadImages";
import ModalImage from "./ModalImage";

function Image({ id, src, photographer_url, photographer }) {
  const ref = createRef(null);
  const refDiv = createRef(null);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };
  useEffect(() => lazyLoad(ref.current), [ref]);

  return (
    <>
      <div className="img" ref={refDiv} onClick={toggleOpen}>
        <div className="img-figure">
          <img
            src={src.small}
            ref={ref}
            data-loaded={src.large}
            alt={photographer_url}
            title={photographer_url}
          />
        </div>
        <div className="img-info">
          <a href={photographer_url} target="_blank" rel="noreferrer">
            {photographer}
          </a>
        </div>
      </div>
      <ModalImage src={src.large} toggleOpen={toggleOpen} isOpen={isOpen} />
    </>
  );
}

export default memo(Image);
