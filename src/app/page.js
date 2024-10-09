// "App/page.js"
import PokeList from "@/components/pokelist";

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();

  const pokemonDetails = await Promise.all(
    json.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
      };
    })
  );
  return <PokeList pokemon={pokemonDetails} />;
}
