import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonItems = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      name={pokemon.name}
      sprites={pokemon.sprites}
      hp={pokemon.hp}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonItems}
    </Card.Group>
  );
}

export default PokemonCollection;
