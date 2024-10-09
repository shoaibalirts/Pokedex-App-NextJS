// "pokemon/[name]/page.js"

import Pokemon from "@/components/pokemon";

export default async function PokeDetails({ params }) {
  // params is props.params the router gives
  const { name } = params;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const json = await response.json();

  // console.log(json);

  return <Pokemon pokemon={json} />;
}
