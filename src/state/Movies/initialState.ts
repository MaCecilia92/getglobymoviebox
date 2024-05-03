import { Movie, SearchResponse } from '../../service';

export interface MovieSearchState extends SearchResponse {
  searchResults: Movie[];
  totalResults: string;
  isLoading: boolean;
  movieById?: object | [];
  error: string | boolean;
}

export const MovieSearch: MovieSearchState = {
  searchResults: [],
  totalResults: '0',
  isLoading: false,
  error: false,
};
