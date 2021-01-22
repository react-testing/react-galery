import { createRef, useEffect, memo } from "react";
import lazyLoad from "./LazyLoadImages";

function Image({ id, src, photographer_url, photographer }) {
  const ref = createRef(null);

  useEffect(() => lazyLoad(ref.current), [ref]);

  return (
    <div className="img">
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
  );
}

export default memo(Image);
