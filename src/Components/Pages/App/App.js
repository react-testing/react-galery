import "../../../Style/App.css";
import ImageLoader from "../../Loaders/ImageLoader";
import Loader from "../../Loaders/loader";
import useImages from "../../Hooks/useImages";
import { lazy, Suspense } from "react";

const ImageLazy = lazy(() => import("../../Image/Image"));

function App() {
  const { images, isLoading, isError } = useImages();
  document.body.style.color = "white";
  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>A ocurred error</p>}
      <div className="massory">
        {images.map((p) => (
          <Suspense fallback={<ImageLoader />} key={p.id}>
            <ImageLazy {...p} />
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default App;
