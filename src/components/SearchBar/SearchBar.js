import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  function submitted(e) {
    e.preventDefault();
    props.addTerm(e.target["keyword"].value);
  }

  return (
    <section className={styles.searchBar}>
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          placeholder="keyword"
          className={styles.searchText}
        />
        <button type="submit" name="searchBtn" className={styles.searchBtn}>
          Search
        </button>
      </form>
      {props.term && <p>You searched for: {props.term}</p>}
    </section>
  );
}
