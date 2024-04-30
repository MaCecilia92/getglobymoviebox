/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all } from 'redux-saga/effects';
import {
  reducer as sessionReducer,
  saga as sessionSaga,
} from './Session/index';

export const reducers = {
  session: sessionReducer,
};

export function* sagas() {
  yield all([...sessionSaga]);
}
