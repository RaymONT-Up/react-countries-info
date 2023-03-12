import instance from "./index.js";
export const getCountriesData = async () => {
  // Getting element from localStorage and if element exists, we parse the data and return
  const localStorageCountries = localStorage.getItem("countries");
  if (localStorageCountries) return JSON.parse(localStorageCountries);

  const response = await instance.get("/all?fields=name,flags");
  if (response.statusText !== "OK") throw new Error("server error");

  const data = response.data;
  localStorage.setItem("countries", JSON.stringify(data));
  return data;
};
