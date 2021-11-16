import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.mainnav}>
      <NavLink activeClassName={styles.activeLink} to="/films">
        Films
      </NavLink>
      <NavLink activeClassName={styles.activeLink} to="/people">
        People
      </NavLink>
      <NavLink activeClassName={styles.activeLink} to="/planets">
        Planets
      </NavLink>
    </nav>
  );
}
