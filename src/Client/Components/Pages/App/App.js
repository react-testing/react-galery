import "../../../Style/App.css";
import ImageLoader from "../../Loaders/ImageLoader";
import Loader from "../../Loaders/loader";
import useImages from "../../Hooks/useImages";
import { lazy, Suspense, useEffect } from "react";

const ImageLazy = lazy(() => import("../../Image/Image"));

function App() {
  const { images, isLoading, isError } = useImages();
  useEffect(() => {
    window.onbeforeunload = function () {
      localStorage.clear();
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>A ocurred error</p>}
      <div className="massory">
        {images.map((src, index) => (
          <Suspense fallback={<ImageLoader />} key={index}>
            <ImageLazy src={src} />
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default App;
