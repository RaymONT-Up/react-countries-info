import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/slices/countries-slice";
import CountriesItem from "./CountriesItem/CountriesItem";
import styles from "./CountriesList.module.scss";
const CountriesList = () => {
  const dispatchAction = useDispatch();
  useEffect(() => {
    (async function () {
      dispatchAction(fetchCountries());
    })();
  }, []);

  const countries = useSelector(state => state.countries.countries);
  console.log(countries);

  if (countries.length === 0) {
    return <h1>te</h1>;
  }
  return (
    <div className={styles.list}>
      {countries.map(country => {
        return (
          <CountriesItem
            key={`${country.name.common}||${country.name.official}`}
            flags={country.flags}
            names={country.name}
            countryCode={country.altSpellings[0]}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
