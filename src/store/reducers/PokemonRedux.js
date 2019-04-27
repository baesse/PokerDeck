import Actions from "../types";
const initialState = {
  pokemon: {},
  fetching: false
};

const request = state => ({ ...state, fetching: false });
const success = (pokemon, state, page) => ({ ...state, fetching: false, pokemon, page });
const fail = (state, error) => ({ ...state, fetching: false, error });

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.API_POKEMON_SHOW_REQUEST:
      return request(state);
    case Actions.API_POKEMON_SHOW_SUCCESS:
      const list = action.pokemons.concat(state.pokemons)
      return success(list, state, action.page);
    case Actions.API_POKEMON_SHOW_FAILURE:
      return fail(state, action.erros);
    default:
      return state;
  }
}
