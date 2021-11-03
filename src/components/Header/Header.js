import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.masthead}>
      <h1>{props.company}</h1>
      <Nav />
    </header>
  );
}
