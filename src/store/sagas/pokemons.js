import { takeLatest, put, call, all } from "redux-saga/effects";
import Actions from "../types";
import axios from "axios";
import { BASE_PATH } from "../api/Api";

const fetchPokemons = page =>
  axios({
    method: "get",
    url: `${BASE_PATH}pokemon?limit=10&offset=${page * 20}`
  });

const fetchPokemon = url =>
  axios({
    method: "get",
    url: url
  });
const fetchPokemonsByName = name =>
  axios({
    method: "get",
    url: `${BASE_PATH}pokemon/${name}`
  });

function* getPokemons({ payload }) {
  try {
    const page = payload.page;
    const response = yield call(() => fetchPokemons(page));
    const pokemonsData = response.data.results;
    const pokemons = yield all(
      pokemonsData.map(k => call(() => showPokemon(k.url)))
    );
    yield put({ type: Actions.API_POKEMONS_SUCCESS, pokemons, page });
  } catch (error) {
    yield put({ type: Actions.API_POKEMONS_FAILURE, error });
  }
}

function* showPokemon(url) {
  try {
    const response = yield call(() => fetchPokemon(url));
    return response.data;
  } catch (error) {
    yield put({ type: Actions.API_POKEMONS_FAILURE, error });
  }
}

function* getPokemonByName({ payload }) {
  try {
    const response = yield call(() => fetchPokemonsByName(payload.search));
    const pokemon = response.data;
    yield put({
      type: Actions.API_POKEMON_SHOW_SUCCESS,
      pokemons: [pokemon],
      page: 1
    });
  } catch (error) {
    yield put({ type: Actions.API_POKEMONS_FAILURE, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Actions.API_POKEMONS_REQUEST, getPokemons);
  yield takeLatest(Actions.API_POKEMON_SHOW_REQUEST, getPokemonByName);
}
