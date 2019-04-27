import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  ImgLogoHeader,
  ListPokemons,
  NextPageBtn,
  Body
} from "./pokerListStyle";
import PokerCardItem from "./PokerCard/PokerCard";
import Actions from "../../store/types/index";
class PokerList extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.onRequestPokemons(1);
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Wrapper>
          <ImgLogoHeader />
        </Wrapper>
        <ListPokemons>
          {this.props.payload.pokemons.map((k, key) => {
            return <PokerCardItem onClick={()=>this.props.onRequestShowPokemon(k.url)}  key={key} props={k} />;
          })}
        </ListPokemons>
        <Body>
          <NextPageBtn onClick={() => this.props.onRequestPokemons(this.props.payload.page + 1)}>VEJA MAIS</NextPageBtn>
        </Body>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.pokemons
});

const mapDispatchToProps = dispatch => ({
  onRequestPokemons: (page) => dispatch({ type: Actions.API_POKEMONS_REQUEST,payload:{page}  }),
  onRequestShowPokemon: (page) => dispatch({ type: Actions.API_POKEMON_SHOW_REQUEST,payload:{page}  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokerList);
