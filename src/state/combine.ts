import { all } from 'redux-saga/effects';
import { reducer as movieReducer, saga as movieSaga } from './Movies/index';

export const reducers = {
  movies: movieReducer,
};

export function* sagas() {
  yield all([...movieSaga]);
}
