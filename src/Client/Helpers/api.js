import { api, image, login } from "../config/config";
import axios from "axios";

const instance = axios.create({
  baseURL: api,
  // headers: {
  //   Authorization: key,
  // },
});

export async function getImages() {
  const res = await instance.get(image);
  return res?.data?.data || [];
}

export async function setLogin(auth) {
  const data = await instance.post(login, auth);
  return data?.data;
}
