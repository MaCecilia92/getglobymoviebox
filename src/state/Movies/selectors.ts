import { RootState } from '../index';
import { Movie } from '../../service';

export const selectSearchResults = (state: RootState): Movie[] =>
  state.movies.searchResults;

export const selectMovieDetails = (state: RootState): object | [] | undefined =>
  state.movies.movieById;

export const selectTotalResults = (state: RootState): string =>
  state.movies.totalResults;

export const selectIsLoading = (state: RootState): boolean =>
  state.movies.isLoading;

export const selectError = (state: RootState): string | null =>
  state.movies.error;
