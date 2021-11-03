import styles from "./ListItem.module.css";

export default function ListItem(props) {
  const { data } = { ...props };

  return (
    <li className={styles.listitem} data-ref={data.ref}>
      <h2 className={styles.title}>{data.title}</h2>
      {data.txt && <p>{data.txt}</p>}
    </li>
  );
}
