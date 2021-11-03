import List from "../List/List";
import styles from "./SearchResults.module.css";

export default function SearchResults(props) {
  const { results, type } = { ...props };

  const formattedData = results.map((item) => {
    const obj = {
      original: item,
    };

    switch (type) {
      default:
        // "films"
        obj.ref = item.episode_id;
        obj.title = item.title;
        obj.txt = item.release_date;
        break;
      case "people":
        break;
      case "planets":
        break;
    }

    return obj;
  });

  return (
    <div className={styles.results}>
      <List data={formattedData} />
    </div>
  );
}
