import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const { key, name, sprites, hp } = props

  return (
    <Card>
      <div>
        <div className="image">
          <img src={ sprites.front } alt={ name } />
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
