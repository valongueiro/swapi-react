import { useParams } from "react-router";

export default function Person({ people }) {
  const { id } = useParams();

  const person = people.find((person, index) => {
    return parseInt(id) === index + 1;
  });

  return (
    <div>
      <h2>Person Details {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}
