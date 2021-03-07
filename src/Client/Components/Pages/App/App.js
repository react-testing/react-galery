import "../../../Style/App.scss";
import ImageLoader from "../../Loaders/ImageLoader";
import Loader from "../../Loaders/loader";
import useImages from "../../Hooks/useImages";
import { lazy, Suspense } from "react";
import Navbar from "../../Elements/Navbar";

const ImageLazy = lazy(() => import("../../Image/Image"));

function App() {
  const { images, isLoading, isError } = useImages();
  if (isLoading) return <Loader />;

  return (
    <>
      {isError && <p>A ocurred error</p>}
      <Navbar />
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
