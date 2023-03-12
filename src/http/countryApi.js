import instance from "./index.js";
export const fetchCountryData = async countryCode => {
  const response = await instance.get(
    `/alpha/${countryCode}?fields=name,capital,flags,population,languages,timezones,currencies`
  );
  if (response.statusText !== "OK") throw new Error("server error");
  return response.data;
};
// ?fields=name,capital,area,borders,currencies,continents,demonyms,languages,population,timezones
