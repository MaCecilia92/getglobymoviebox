import { type FC, useEffect, useState } from 'react';
import { SearchComponent } from '../../components';
import { SearchComponentProps } from '../../components';
import { Favorite } from '../../components';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectSearchResults } from '../../state/Movies/selectors';


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

  const movies = useSelector(selectSearchResults);
  console.log(movies)

  console.log(searchResults, 'resultshome')

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
