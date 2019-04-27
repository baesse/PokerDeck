import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import Actions from '../types';

const fetchDog = () => axios({
  method: 'get',
  url: 'https://dog.ceo/api/breeds/image/random',
});

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    yield put({ type: Actions.API_CALL_SUCCESS, dog });
  } catch (error) {
    yield put({ type: Actions.API_CALL_FAILURE, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Actions.API_CALL_REQUEST, workerSaga);
}
