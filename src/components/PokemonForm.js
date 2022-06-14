import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm(props) {
  const { pokemons, setPokemons } = props
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [frontSprite, setFrontSprite] = useState("")
  const [backSprite, setBackSprite] = useState("")

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const newPokemon = {
            name: name,
            hp: hp,
            sprites: {
              front: frontSprite,
              back: backSprite
            }
          }
          setPokemons([...pokemons, newPokemon])
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(event) => setHp(event.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontSprite}
            onChange={(event) => setFrontSprite(event.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backSprite}
            onChange={(event) => setBackSprite(event.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
