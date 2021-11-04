import List from "../List/List";
import styles from "./SearchHistory.module.css";

export default function SearchHistory(props) {
  const { terms } = { ...props };

  const formattedData = terms.map((item, index) => {
    return {
      ref: index,
      title: item,
      txt: null,
    };
  });

  return (
    <div className={styles.history}>
      <List data={formattedData} />
    </div>
  );
}
