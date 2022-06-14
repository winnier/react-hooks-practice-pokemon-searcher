import React from "react";

function Search(props) {
  const { pokemons, setPokemons } = props

  function filterPokemon(event) {
    setPokemons(pokemons.filter((pokemon) => pokemon.name.startsWith(event.target.value)))
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={filterPokemon} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
