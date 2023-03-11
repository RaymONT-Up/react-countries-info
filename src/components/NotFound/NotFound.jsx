import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import styles from "./NotFound.module.scss";
const NotFound = props => {
  const title = props.title ? props.title : "Page not found 404 :(";
  const subtitle = props.subtitle
    ? props.subtitle
    : "Please return to homepage";

  return (
    <Card className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <Link className={styles.link} to="/">
        🔙 Back to home
      </Link>
    </Card>
  );
};

export default NotFound;
