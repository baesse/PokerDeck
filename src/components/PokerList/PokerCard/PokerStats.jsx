import React, { useState } from "react";
import {
  PokemonStatsTypes,
  PokemonStatsTypesItems,
  ItemOptionsControlerStyle,
  ItemListStyle,
  ImgIconChangeStyle
} from "./pokerStatsStyle";
import iconOpen from "../../../assets/icons/ic-drop-copy-2.svg";
export const PokerStats = ({ props }) => {
  const [showTypes, setTypes] = useState(false);
  const [showStats, setStats] = useState(false);
  const [showAbilities, setAbilities] = useState(false);
  const [showMoves, setMoves] = useState(false);
  const renderType = (setAttribute, attribute, item,items,indice, attributeItem,rootItem) => {
    return (
      <PokemonStatsTypesItems>
        <ItemOptionsControlerStyle onClick={() => setAttribute(!attribute)}>
          <label>{item}</label>
          <ImgIconChangeStyle
            showTypes={attribute}
            alt="open types"
            src={iconOpen}
          />
        </ItemOptionsControlerStyle>
        {attribute &&
          props[items].map((k, index) => {
            return (
              <ItemListStyle showTypes={attribute} key={index}>
                {k[indice][attributeItem]} {rootItem && k[rootItem]}
              </ItemListStyle>
            );
          })}
      </PokemonStatsTypesItems>
    );
  };

  return (
    <PokemonStatsTypes>
      {renderType(setTypes, showTypes, "Types",'types','type','name')}
      {renderType(setStats, showStats, "Stats",'stats','stat','name','base_stat')}
      {renderType(setAbilities, showAbilities, "Abilities","abilities",'ability','name')}
      {renderType(setMoves, showMoves, "Moves","moves",'move','name')}
    </PokemonStatsTypes>
  );
};
export default PokerStats;
