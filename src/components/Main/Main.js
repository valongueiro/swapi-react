import { Routes, Route } from "react-router-dom";
import Home from "../../routes/Home/Home";
import Films from "../../routes/Films/Films";
import Film from "../Film/Film";
import People from "../../routes/People/People";
import Planets from "../../routes/Planets/Planets";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContent}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />}>
          <Route path="/films/:id" element={<Film />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
}
