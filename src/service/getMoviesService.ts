import { API_KEY } from '../constants';
import { objectToUrlParams } from '../utils';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Search?: Movie[];
  MovieById?: object | [];
  totalResults?: string;
  Response?: string;
}

export const getMovieSearchService = async (
  params: string | { [key: string]: string },
): Promise<SearchResponse | Movie[] | object> => {
  console.log(typeof params, 'params');

  const paramsString =
    typeof params === 'string'
      ? params
      : objectToUrlParams(params as { [key: string]: string });

  try {
    if (typeof paramsString === 'object' && Object.keys(params).length === 0) {
      return {};
    }

    const response = await fetch(
      `https://www.omdbapi.com/?${paramsString}&apikey=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: SearchResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return {};
  }
};
