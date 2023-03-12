import React from "react";
import styles from "./Title.module.scss";
const Title = ({ as: Element, className, children, ...rest }) => {
  const classes = `${styles.title} ${className ? className : ""}`;
  return (
    <Element {...rest} className={classes}>
      {children}
    </Element>
  );
};

export default Title;
