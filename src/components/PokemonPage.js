import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(response => response.json())
      .then((fetchedPokemons) => {
        setPokemons(fetchedPokemons)
      })
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        pokemons={ pokemons }  
        setPokemons={setPokemons}
      />
      <br />
      <Search 
        pokemons={ pokemons } 
        setPokemons={setPokemons}
      />
      <br />
      <PokemonCollection pokemons={ pokemons }/>
    </Container>
  );
}

export default PokemonPage;
