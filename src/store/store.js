import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from './reducers/reducers';
import Sagas from './sagas/sagas';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(
  Reducers(),
  compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(Sagas);
