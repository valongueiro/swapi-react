import { useState } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import Main from "../Main/Main";
import styles from "./App.module.css";

export default function App() {
  const name = "Company Name";
  const [terms, setTerms] = useState([]);

  function addTerm(term) {
    const uniqueTerms = new Set([term, ...terms]);
    setTerms(Array.from(uniqueTerms));
  }

  return (
    <div className={styles.App}>
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className={styles.content}>
        <SearchHistory terms={terms} />
        <Main />
      </main>
    </div>
  );
}
