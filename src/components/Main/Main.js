import { Switch, Route } from "react-router-dom";
import Home from "../../routes/Home/Home";
import Films from "../../routes/Films/Films";
import Film from "../Film/Film";
import People from "../../routes/People/People";
import Planets from "../../routes/Planets/Planets";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContent}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/films/:id">
          <Film />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
      </Switch>
    </div>
  );
}
