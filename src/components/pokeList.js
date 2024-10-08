import Link from "next/link";

export default function PokeList({ pokemon }) {
  //   console.log(pokemon);
  // pokemon = pokemon.results
  return (
    <ul>
      {pokemon.map((item) => (
        <li key={item.name}>
          <Link href={"/pokemon/" + item.name}>{item.name}</Link>
          
        </li>
      ))}
    </ul>
  );
}
