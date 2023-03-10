import React from "react";
import styles from "./CountriesItem.module.scss";
import Card from "../../UI/Card/Card";
const CountriesItem = props => {
  return (
    <Card className={styles.item}>
      <img
        className={styles.item__img}
        src={props.flags[1]}
        alt={`Flag of ${props.names.common}`}
      />

      {props.names.common}
    </Card>
  );
};
export default CountriesItem;
