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
import PokerSearch from '../Search/Search'
class PokerList extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.onRequestPokemons(1);
  }

  render() {
    return (
      <Fragment>
        <Wrapper>
          <ImgLogoHeader />
        </Wrapper>
        <PokerSearch />
        <ListPokemons>
          {this.props.payload.pokemons.map((k, key) => {
            return <PokerCardItem key={key} props={k} />;
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokerList);
