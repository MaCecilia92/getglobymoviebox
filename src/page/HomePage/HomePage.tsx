import { type FC } from 'react';
import { SearchComponent } from '../../components';
import { SearchComponentProps } from '../../components';
import { Favorite } from '../../components';
import { Movie } from '../../service';

export interface MovieFavorite {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
}

const HomePage: FC<SearchComponentProps> = ({
  searchResults,
  SearchByTerm,
  error,
}) => {

  const getFavoritesFromLocalStorage = (): Favorite[] => {
    const localStorageItems: string | null = localStorage.getItem('favorites');
  
    if (localStorageItems !== null) {
      return JSON.parse(localStorageItems);
    } else {
      return [];
    }
  };
  
  const favorites: Favorite[] = getFavoritesFromLocalStorage();
  
  const addIsFavoriteFlag = (movie: Movie, favorites: Favorite[]): Movie => {
    const favoriteMatch = favorites.find(favorite => favorite.idMovie === movie.imdbID);
    if (favoriteMatch) {
        return { ...movie, isFavorite: true };
    } else {
        return { ...movie, isFavorite: false };
    }
  };
  
  const searchResultsWithFavorites: Movie[] = searchResults.map(movie =>
    addIsFavoriteFlag(movie, favorites)
  );
  return (
    <>
      <SearchComponent
        searchResults={searchResultsWithFavorites || []}
        SearchByTerm={SearchByTerm}
        error={error}
      />
    </>
  );
};

export default HomePage;
