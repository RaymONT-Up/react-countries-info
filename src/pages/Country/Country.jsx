import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import Loader from "../../components/UI/Loader/Loader";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";
import { getCountry } from "../../store/slices/country-slice";
import styles from "./Country.module.scss";
const Country = () => {
  const params = useParams();
  const dispatchAction = useDispatch();
  const {
    country: countryData,
    status: countryStatus,
    error: countryError,
  } = useSelector(state => state.country);
  useEffect(() => {
    if (countryStatus === null || "success" || "rejected") {
      (async function () {
        dispatchAction(getCountry(params.countryCode));
      })();
    }
    // return() => {
    //   dispatch(deleteData)
    // }
  }, []);
  console.log(countryData, countryStatus, countryError);

  if (countryStatus === "loading") {
    return (
      <div className={styles.wrapper}>
        <Loader />;
      </div>
    );
  }
  if (countryStatus === "rejected") {
    // !!!!!!!!!!!!! Вывести эту информацию в отдельный компонент и поработать над делением на UI
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Oh sorry... we have error :(</h1>
        <h2 className={styles.subtitle}>
          Please try to reload the page or contact the site owner
        </h2>
        <p className={styles.paragraph}>{countryError}</p>
      </div>
    );
  }

  const countryName = countryData.name?.common;
  // const countryCode = countryData.altSpellings[0];

  const countryFlagImage = countryData.flags?.png || countryData.flags?.svg;
  const countryFlagImageAlt =
    countryData.flags?.alt || `flag of the ${countryData.name?.common}`;

  const countryCoatOfArmsImage =
    countryData.coatOfArms?.png || countryData.coatOfArms?.svg;
  const countryCoatOfArmsAlt =
    countryData.coatOfArms?.alt || `Coat of Arms the ${countryName}`;

  const countryTimezones = countryData.timezones;

  if (countryStatus === "success") {
    return (
      <Card className={styles.wrapper}>
        <Title as="h1" className={styles.title}>
          {countryName}
        </Title>

        <div className={styles.row}>
          <div className={styles.col}>
            <Subtitle className={styles.subtitle} as="h2">
              Flag
            </Subtitle>
            <div className={styles.image__wrapper}>
              <img
                className={styles.image}
                src={countryFlagImage}
                alt={countryFlagImageAlt}
              />
            </div>
          </div>
          <div className={styles.col}>
            <Subtitle className={styles.subtitle} as="h2">
              Coat of arms
            </Subtitle>
            <div className={styles.image__wrapper}>
              <img
                className={styles.image}
                src={countryCoatOfArmsImage}
                alt={countryCoatOfArmsAlt}
              />
            </div>
          </div>
          <div className={styles.col}>
            <Subtitle className={styles.subtitle} as="h2">
              Timezones
            </Subtitle>
            {countryTimezones.map(item => {
              return <Card key={item}>{item}</Card>;
            })}
          </div>
        </div>
      </Card>
    );
  }
};

export default Country;
