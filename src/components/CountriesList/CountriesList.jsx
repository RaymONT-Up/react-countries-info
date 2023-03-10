import React from "react";
import { useSelector } from "react-redux";
import CountriesItem from "./CountriesItem/CountriesItem";
import styles from "./CountriesList.module.scss";
const CountriesList = () => {
  const countries = useSelector(store => store.countries.countries);
  return (
    <ul className={styles.list}>
      {countries.map(countryInfo => {
        return <CountriesItem />;
      })}
    </ul>
  );
};

export default CountriesList;
