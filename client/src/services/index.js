import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/watchs`);

    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/watchs/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
