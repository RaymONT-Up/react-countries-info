import axios from "axios";

const baseURL = "https://restcountries.com/v3";
const instance = axios.create({
  baseURL,
});
export default instance;
