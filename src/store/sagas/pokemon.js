import { takeLatest, put, call } from "redux-saga/effects";
import Actions from "../types";
import axios from "axios";
import {BASE_PATH} from '../api/Api'

const fetchPokemon = (url) =>
  axios({
    method: "get",
    url: url
  });


function* showPokemon({payload}) {
  try {
    const page = payload.page
    const response = yield call(()=> fetchPokemon(page));
    const pokemons = response.data.results;
    yield put({ type: Actions.API_POKEMON_SHOW_SUCCESS, pokemons, page });
  } catch (error) {
    yield put({ type: Actions.API_POKEMON_SHOW_FAILURE, error });
  }
}



export function* watcherSaga() {
  yield takeLatest(Actions.API_POKEMON_SHOW_REQUEST, showPokemon);
}
