import { type FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { useLocalStorage } from '../../customhooks';

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
  const [data, setData] = useLocalStorage<Favorite>({
    favorite: [],
  });

  const handleClick = () => {
    const newFavorite: Favorite = {
      title: Title,
      type: Type,
      year: Year,
      idMovie: imdbID,
      poster: Poster,
      isFavorite: true,
    };
    setData('favorite', data['favorite'].concat(newFavorite));
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
