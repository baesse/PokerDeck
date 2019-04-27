import Actions from "../types";
const initialState = {
  pokemons: [],
  fetching: false,
  page: 1
};

const request = state => ({ ...state, fetching: true });
const success = (pokemons, state, page) => ({ ...state, fetching: false, pokemons, page });
const fail = (state, error) => ({ ...state, fetching: false, error });

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.API_POKEMONS_REQUEST:
      return request(state);
    case Actions.API_POKEMONS_SUCCESS:
      const list = state.pokemons.concat(action.pokemons)
      return success(list, state, action.page);
    case Actions.API_POKEMONS_FAILURE:
      return fail(state, action.erros);
    default:
      return state;
  }
}
