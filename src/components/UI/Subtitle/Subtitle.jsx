import React from "react";
import styles from "./Subtitle.module.scss";
const Subtitle = ({ as: Element, className, children, ...rest }) => {
  const classes = `${styles.subtitle} ${className ? className : ""}`;
  return (
    <Element {...rest} className={classes}>
      {children}
    </Element>
  );
};

export default Subtitle;
