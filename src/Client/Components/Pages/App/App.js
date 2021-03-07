import "../../../Style/App.scss";
import ImageLoader from "../../Loaders/ImageLoader";
import Loader from "../../Loaders/loader";
import useImages from "../../Hooks/useImages";
import { lazy, Suspense, useState } from "react";
import ModalUpload from "../../Modals/ModalUpload";
const ImageLazy = lazy(() => import("../../Image/Image"));

function App() {
  const { images, isLoading, isError } = useImages();
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((c) => !c);
  }

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>A ocurred error</p>}

      <button onClick={toggleOpen}>Subir imagen</button>

      <div className="massory">
        {images.map((src, index) => (
          <Suspense fallback={<ImageLoader />} key={index}>
            <ImageLazy src={src} />
          </Suspense>
        ))}
      </div>
      <ModalUpload {...{ isOpen, toggleOpen }} />
    </>
  );
}

export default App;
