import { takeLatest, put } from 'redux-saga/effects';
import Actions from '../types';

function* createUser({ payload }) {
  try {
    yield put({ type: Actions.USER_CREATE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: Actions.USER_CREATE_FAILURE, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Actions.USER_CREATE_REQUEST, createUser);
}
