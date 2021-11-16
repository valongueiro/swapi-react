import { NavLink } from "react-router-dom";
import styles from "./People.module.css";

export default function People({ people }) {
  return (
    <>
      <div className={styles.results}>
        <h2>People List</h2>

        {people.length === 0 && <p>Loading...</p>}
        {people.map((person, index) => (
          <p key={person.name}>
            <NavLink
              activeClassName={styles.activeLink}
              to={`/people/${index + 1}`}
            >
              {person.name}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}
