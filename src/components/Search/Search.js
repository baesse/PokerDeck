import React, { useState } from "react";
import { connect } from "react-redux";
import Actions from "../../store/types/index";
import {
  PokemonSearchInputTypes,
  PokebolaImage,
  InputSearch
} from "./SearchStyle";
import PokebolaImg from "../../assets/1b412053a7b59ab47149a3eb59e5804d.png";
import PokebolaImgOpen from "../../assets/pokeball-transparent-8-bit-6.png";
export const PokerSearch = props => {
  const [showEffect, setEffect] = useState(false);
  const [showImage, setImage] = useState(PokebolaImg);
  const [search, setSearch] = useState("");
  const initialSeach = () => {
    setEffect(!showEffect);
    if (!showEffect) {
      setImage(PokebolaImgOpen);
    } else {
      setImage(PokebolaImg);
    }
  };
  const getPokemon = search => {
    if (search) {
      props.onRequestPokemon(search);
    } else {
      props.onRequestPokemons(1);
    }
  };
  return (
    <PokemonSearchInputTypes showEffect={showEffect}>
      <InputSearch
        onChange={event => getPokemon(event.target.value)}
        showEffect={showEffect}
        placeholder="Search"
      />
      <PokebolaImage
        alt="pokebola"
        onClick={() => initialSeach()}
        src={showImage}
      />
    </PokemonSearchInputTypes>
  );
};
const mapStateToProps = state => ({
  payload: state.pokemons
});

const mapDispatchToProps = dispatch => ({
  onRequestPokemon: search =>
    dispatch({ type: Actions.API_POKEMON_SHOW_REQUEST, payload: { search } }),
  onRequestPokemons: page =>
    dispatch({ type: Actions.API_POKEMONS_REQUEST, payload: { page } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokerSearch);
