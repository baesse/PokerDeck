import { combineReducers } from 'redux';
import Dogreducer from './DogRedux';
import UserReducer from './UserRedux';
import PokerRedux from './PokerRedux'


const appReducer = () => combineReducers({
  dogs: Dogreducer,
  user: UserReducer,
  pokemons: PokerRedux,

});
const Reducers = () => appReducer();


export default Reducers;
