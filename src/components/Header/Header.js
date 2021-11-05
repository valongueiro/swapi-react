import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.masthead}>
      <h1>
        <Link to="/">{props.company}</Link>
      </h1>
      <Nav />
    </header>
  );
}
