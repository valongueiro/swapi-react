import { useLocation, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../../routes/Home/Home";
import Films from "../../routes/Films/Films";
import Film from "../Film/Film";
import People from "../../routes/People/People";
import Planets from "../../routes/Planets/Planets";
import styles from "./Main.module.css";

export default function Main() {
  const [people, setPeople] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/people") {
      (async function () {
        const url = "https://swapi.dev/api/people/";
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data.results);
      })();
    }
  }, [pathname]);

  return (
    <div className={styles.mainContent}>
      <Switch>
        {/* HOME */}
        <Route path="/" exact>
          <Home />
        </Route>
        {/* FILMS */}
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/films/:id">
          <Film />
        </Route>
        {/* PEOPLE */}
        <Route path="/people">
          <People people={people} />
        </Route>
        {/* PLANETS */}
        <Route path="/planets">
          <Planets />
        </Route>
        {/* REDIRECT */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
