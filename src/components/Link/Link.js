import styles from "./Link.module.css";

export default function Link(props) {
  const { title, url } = props.data;

  return (
    <a href={url} className={styles.navLink}>
      {title}
    </a>
  );
}
