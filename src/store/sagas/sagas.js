import { all } from 'redux-saga/effects';
import * as DogsSaga from './dogs';
import * as UserSaga from './user';
import * as PokemonsSaga from './pokemons'
import * as PokemonSaga from './pokemon'

function* Sagas() {
  yield all([
    DogsSaga.watcherSaga(),
    UserSaga.watcherSaga(),
    PokemonsSaga.watcherSaga(),
    PokemonSaga.watcherSaga()
  ]);
}

export default Sagas;
