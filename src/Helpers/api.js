import { image, key } from "../config/config";

export const getImages = () =>
  fetch(image(1), {
    headers: {
      Authorization: key,
    },
  });
