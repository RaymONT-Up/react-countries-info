import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/slices/countries-slice";
import Loader from "../UI/Loader/Loader";
import CountriesItem from "./CountriesItem/CountriesItem";
import styles from "./CountriesList.module.scss";
const CountriesList = () => {
  const dispatchAction = useDispatch();
  const {
    status: countriesStatus,
    error: countriesError,
    countries: countriesArray,
  } = useSelector(state => state.countries);
  useEffect(() => {
    if (countriesStatus === null) {
      (async function () {
        dispatchAction(fetchCountries());
      })();
    } else return;
  }, []);

  if (countriesStatus === "loading") {
    return (
      <div className={styles.wrapper}>
        <Loader />;
      </div>
    );
  }
  if (countriesStatus === "rejected") {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Oh sorry... we have error :(</h1>
        <h2 className={styles.subtitle}>
          Please try to reload the page or contact the site owner
        </h2>
        <p className={styles.paragraph}>{countriesError}</p>
      </div>
    );
  }
  return (
    <div className={styles.list}>
      {countriesArray.map(country => {
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
