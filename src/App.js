import "./App.css";
import useMounted from "./useMounted";
import ImageLoader from "./ImageLoader";
import Loader from "./loader";
import { image, key } from "./config";
import { useEffect, lazy, Suspense, useState } from "react";

const fetchData = () =>
  fetch(image(1), {
    headers: {
      Authorization: key,
    },
  });

const ImageLazy = lazy(() => import("./Image"));

function App() {
  const [images, setImages] = useState([]);
  const { init, isLoading, isError, data } = useMounted(true);

  useEffect(() => {
    init(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    data?.photos && setImages(data.photos);
  }, [data]);

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
