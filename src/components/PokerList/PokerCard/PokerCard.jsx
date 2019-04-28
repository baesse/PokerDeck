import React, { useState } from "react";
import { PokerCard, PokerCardHeaderStyle, PokemonName } from "../pokerListStyle";
import { PokerStats } from "./PokerStats";

export const PokerCardItem = ({ props }) => {
  const [showCard, setCard] = useState(false);
  var images = [];
  images = Object.values(props.sprites).filter(e => e !== null);
  return (
    <PokerCard showCard={showCard}>
      <PokerCardHeaderStyle>
        <img
          onClick={() => setCard(!showCard)}
          alt="pokemon"
          src={images[parseInt(Math.random() * images.length + 0)]}
        />
        <PokemonName>{props.name}</PokemonName>
        <label>Weight {props.weight}</label>
        <label>Experience {props.base_experience}</label>
      </PokerCardHeaderStyle>
      {showCard && <PokerStats props={props} />}
    </PokerCard>
  );
};
export default PokerCardItem;
