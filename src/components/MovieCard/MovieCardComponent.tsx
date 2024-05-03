import { type FC } from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Movie } from '../../service';
import { FavoriteButtonComponent } from '../FavoriteButton/FavoriteButtonComponent';

interface MovieCardProps {
  moviesData: Movie[];
}

export const MovieCardComponent: FC<MovieCardProps> = ({ moviesData }) => {
  return (
    <>
      {moviesData?.map((movie) => (
        <Box
          key={movie.imdbID}
          boxShadow='md'
          position='relative'
          marginBottom={4}
        >
          <Box position='absolute' p={5} right={0}>
            {movie && <FavoriteButtonComponent movie={movie} />}
          </Box>
          <Image
            fallbackSrc='https://via.placeholder.com/150'
            width={300}
            objectFit='cover'
            src={movie.Poster}
            alt={movie.Title}
          />
          <Link key={movie.imdbID} to={`/${movie.imdbID}`}>
            <Box position='absolute' p={5} bottom={0} bg='brand.primary'>
              {movie && (
                <Text color='brand.white' as='b'>
                  {movie.Title}
                </Text>
              )}
            </Box>
          </Link>
        </Box>
      ))}
    </>
  );
};
