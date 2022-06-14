import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const { key, name, sprites, hp } = props
  const [useFrontSprite, setUseFrontSprite] = useState(true)

  return (
    <Card onClick={() => {setUseFrontSprite(!useFrontSprite)}}>
      <div>
        <div className="image">
          <img src={useFrontSprite ? sprites.front : sprites.back } alt={name} />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp } hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

//{ useFrontSprite ? <img src={ sprites.front } alt={ name } /> : <img src={ sprites.back } alt={ name } /> }