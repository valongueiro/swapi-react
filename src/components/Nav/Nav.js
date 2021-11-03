import React from "react";
import Link from "../Link/Link";
// import styles from "./Nav.module.css";

export default function Nav() {
  const navLinks = [
    { title: "Films", url: "https://swapi.dev/api/films/" },
    { title: "People", url: "https://swapi.dev/api/people/" },
    { title: "Planets", url: "https://swapi.dev/api/planets/" },
  ];

  return (
    <nav>
      {navLinks.map((link) => (
        <Link key={link.title} data={link} />
      ))}
    </nav>
  );
}
