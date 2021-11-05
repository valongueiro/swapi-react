import { Routes, Route } from "react-router-dom";
import Home from "../../routes/Home/Home";
import Films from "../../routes/Films/Films";
import People from "../../routes/People/People";
import Planets from "../../routes/Planets/Planets";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContent}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
}
