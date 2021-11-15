import { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import Planet from "../../components/Planet/Planet";
import styles from "./Planets.module.css";

export default function Planets(props) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (function getData() {
      const url = "https://swapi.dev/api/planets/";

      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          setPlanets(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  const findPlanet = (id) => {
    const planet = planets.find((planet, index) => parseInt(id) === index + 1);
    return planet;
  };

  return (
    <>
      <div className={styles.results}>
        <h2>Planets List</h2>

        {planets.length === 0 && <p>Loading...</p>}
        {planets.map((planet, index) => (
          <p key={planet.name}>
            <NavLink
              activeClassName={styles.activeLink}
              to={`/planets/${index + 1}`}
            >
              {planet.name}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Route path="/planets/:id">
          <Planet findPlanet={findPlanet} />
        </Route>
      </div>
    </>
  );
}
