import { getImages } from "../../Helpers/api";
import useMounted from "../../Helpers/useMounted";
import { useState, useEffect } from "react";

export default function useImages() {
  const [images, setImages] = useState([]);
  const { init, isLoading, isError, data } = useMounted(true);

  useEffect(() => {
    init(getImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    data?.photos && setImages(data.photos);
  }, [data]);

  return {
    images,
    isLoading,
    isError,
  };
}
