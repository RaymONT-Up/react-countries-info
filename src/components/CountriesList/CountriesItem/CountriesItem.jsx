import React from "react";
import styles from "./CountriesItem.module.scss";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
const CountriesItem = props => {
  // {props.countryCode}
  return (
    <Card className={styles.item}>
      <div className={styles["item__img-wrapper"]}>
        <img
          className={styles.item__img}
          src={props.flags[1]}
          alt={`Flag of ${props.names.common}`}
        />
      </div>

      <span className={styles.item__name}>{props.names.common}</span>
    </Card>
  );
};
export default CountriesItem;
