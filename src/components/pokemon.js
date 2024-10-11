export default function Pokemon({ pokemon }) {
  // console.log("TypesLength", pokemon.types.length);
  // console.log("Pokemon", pokemon.name);
  // console.log("left", left);

  return (
    <>
      <section className="pokemon-header">
        <img src="/images/left.svg" alt="left arrow" />
        <p>Bulbasaur</p>
        <p>#001</p>
        <img src="/images/slideleft.svg" alt="slideleft" />
        <img src="/images/slideright.svg" alt="slideright" />
      </section>
      <section className="pokemon-type"></section>
      <section className="pokemon-about">
        <h2>About</h2>
        <div className="pokemon-weight">weight</div>
        <div className="pokemon-height">height</div>
        <div className="pokemon-moves"></div>
        <p></p>
      </section>

      {/* <h2 className="text-x1">{pokemon.name}</h2>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <ul>
        {pokemon.types.map((newItem) => (
          <li
            key={newItem.type.name}
            //   style={{ backgroundColor: Colors[newItem.type.name].color }}
            className={`bg-${newItem.type.name} rounded-full px-2`}
          >
            -------{newItem.type.name}------
          </li>
        ))}
      </ul>
      <h3 className="text-x2">Abilities</h3>

      <ul>
        {pokemon.abilities.map((item) => (
          <li key={item.ability.name}>{item.ability.name}</li>
        ))}
      </ul>

      <h3 className="text-x2">Moves</h3>
      <ul>
        {pokemon.moves.map((item) => (
          <li key={item.move.name}>{item.move.name}</li>
        ))}
      </ul> */}
    </>
  );
}
