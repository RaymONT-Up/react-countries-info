import instance from "./index.js";
export const getCountriesData = async () => {
  const response = await instance.get("/all?fields=name,flags");
  if (response.statusText !== "OK") {
    throw new Error("server error");
  }
  const data = response.data;
  return data;
};
