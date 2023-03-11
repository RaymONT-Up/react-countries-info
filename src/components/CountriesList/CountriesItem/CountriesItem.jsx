import React from "react";
import styles from "./CountriesItem.module.scss";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
import { ROUTE_COUNTRY } from "../../../utils/consts";
const CountriesItem = props => {
  return (
    <Link to={`${ROUTE_COUNTRY}${props.countryCode}`}>
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
    </Link>
  );
};
export default CountriesItem;
