import { type FC, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

export interface Favorite {
  title: string;
  type: string;
  year: string;
  idMovie: string;
  poster: string;
  isFavorite?: boolean;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
}

interface FavoriteButtonProps {
  movie: Movie;
}

export const FavoriteButtonComponent: FC<FavoriteButtonProps> = ({ movie }) => {
  const { Title, Poster, imdbID, Type, Year, isFavorite } = movie;

  useEffect(() => {
    const existingFavorites = localStorage.getItem('favorites');
    if (!existingFavorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }, []);

  const updateFavoriteLocalstorage = (newFavorite: Favorite): void => {
    const existingFavorites: Favorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isDuplicate = existingFavorites.some(favorite => favorite.idMovie === newFavorite.idMovie);
    if (!isDuplicate) {
      existingFavorites.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
    }
  };

  const handleClick = () => {
    const newFavorite: Favorite = {
      title: Title,
      type: Type,
      year: Year,
      idMovie: imdbID,
      poster: Poster,
      isFavorite: true,
    };
    updateFavoriteLocalstorage(newFavorite);
  };

  return (
    <>
      <IconButton
        colorScheme='gray'
        isRound={true}
        aria-label='Search database'
        icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
        isDisabled={isFavorite}
        onClick={handleClick}
      />
    </>
  );
};
