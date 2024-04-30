import { type RootState } from '../index';
import { type User, type SessionState } from './initialState';

export const selectSession = (state: RootState): SessionState => state.session;
export const selectUsers = (state: RootState): User => {
  return state.session.users as User;
};
export const selectIsLoading = (state: RootState): boolean =>
  state.session.isLoading;
