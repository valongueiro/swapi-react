import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

export default function List(props) {
  const { data } = { ...props };

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <ListItem key={item.title} data={item} />
      ))}
    </ul>
  );
}
