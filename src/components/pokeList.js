import Link from "next/link";
import Card from "./card";

export default function PokeList({ pokemon }) {
  return (
    // <ul className="grid grid-cols-3 gap-4 p-4">
    <ul>
      {pokemon.map((item) => (
        <li key={item.name}>
          <Link href={"/pokemon/" + item.name}>
            <Card
              pokemonID={item.id}
              pokemonImage={item.image}
              pokemonName={item.name}
            />
            ------------
          </Link>
        </li>
      ))}
    </ul>
  );
}
