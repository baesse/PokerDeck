import React from "react";
import { PokerCard } from "../pokerListStyle";

export const PokerCardItem = ({ props, onClick }) => {
  var images = [];
  if (Array.isArray(Object.values(props.sprites))) {
    images = Object.values(props.sprites);
  }
  return (
    <PokerCard onClick={onClick}>
      <img src={images[0]} />
      <label>{props.name}</label>
    </PokerCard>
  );
};
export default PokerCardItem;
