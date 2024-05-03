import { type FC, useEffect, useState } from 'react';
import { SearchComponent } from '../../components';
import { SearchComponentProps } from '../../components';
import { Favorite } from '../../components';

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
  const [favoriteItems, setFavoriteItems] = useState<MovieFavorite[] | null>(
    null,
  );

  useEffect(() => {
    const localStorageItems: string | null = localStorage.getItem('favorite');
    if (localStorageItems && searchResults) {
      const dataFromStorage: Favorite[] = JSON.parse(localStorageItems);
      const updatedResults = searchResults.map((result: MovieFavorite) => {
        const match = dataFromStorage.find(
          (storageItem: Favorite) => result.imdbID === storageItem.idMovie,
        );
        if (match) {
          return { ...result, isFavorite: true };
        }
        return { ...result, isFavorite: false };
      });
      setFavoriteItems(updatedResults);
    }
  }, [searchResults]);

  return (
    <>
      <SearchComponent
        searchResults={favoriteItems || []}
        SearchByTerm={SearchByTerm}
        error={error}
      />
    </>
  );
};

export default HomePage;
