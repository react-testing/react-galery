import { api, image, key } from "../config/config";
import axios from "axios";

const instance = axios.create({
  baseURL: api,
  headers: {
    Authorization: key,
  },
});

export async function getImages() {
  const data = await instance.get(image(1));
  return data?.data?.photos;
}
