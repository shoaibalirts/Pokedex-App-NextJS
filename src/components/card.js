export default function Card({ pokemonID, pokemonImage, pokemonName }) {
  console.log("id: ", pokemonID);
  console.log("src: ", pokemonImage);
  console.log("name: ", pokemonName);

  return (
    // <article className="flex flex-col">
    <article>
      <p>{pokemonID}</p>
      {/* <img className="w-24 h-24 mx-auto" src={pokemonImage} /> */}
      <img src={pokemonImage} />
      <p>{pokemonName}</p>
    </article>
  );
}
