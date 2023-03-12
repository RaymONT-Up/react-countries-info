import React from "react";
import styles from "./Card.module.scss";

const Card = props => {
  const classes = `${styles.card} ${props.className ? props.className : ""}`;
  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
};

export default Card;
