import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import SearchResults from "../SearchResults/SearchResults";
import styles from "./App.module.css";

export default function App() {
  const name = "Company Name";
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState("films");

  function addTerm(term) {
    const uniqueTerms = new Set([term, ...terms]);
    setTerms(Array.from(uniqueTerms));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(terms[0]);
  }, [terms]);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;
    if (keyword) url += `/?search=${keyword}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    setResults(data.results);
  }

  return (
    <div className={styles.App}>
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className={styles.content}>
        <SearchHistory terms={terms} />
        <SearchResults results={results} type={dataType} />
      </main>
    </div>
  );
}
