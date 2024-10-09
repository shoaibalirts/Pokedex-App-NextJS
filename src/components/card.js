export default function Card({ pokemonID, pokemonImage, pokemonName }) {
  //   console.log("id: ", pokemonID);
  //   console.log("src: ", pokemonImage);
  //   console.log("name: ", pokemonName);

  return (
    // <article className="flex flex-col">
    <article>
      <p className="id-container">{pokemonID}</p>

      {/* <img className="w-24 h-24 mx-auto" src={pokemonImage} /> */}
      <div className="image-container">
        <img src={pokemonImage} />
      </div>
      <p className="name-container">{pokemonName}</p>
    </article>
  );
}
