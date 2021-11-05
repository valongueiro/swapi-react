import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Film from "../../components/Film/Film";
import styles from "./Films.module.css";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    (function getData() {
      const url = "https://swapi.dev/api/films/";

      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          setFilms(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  return (
    <>
      <div className={styles.results}>
        <h2>Film List</h2>

        {films.length === 0 && <p>Loading...</p>}
        {films.map((film, index) => (
          <p key={film.title}>
            <NavLink
              activeClassName={styles.activeLink}
              to={`/films/${index + 1}`}
            >
              {film.title}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Routes>
          <Route path="/films/:id">
            <Film />
          </Route>
        </Routes>
      </div>
    </>
  );
}
