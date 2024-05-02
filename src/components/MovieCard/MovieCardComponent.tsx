import { type FC } from 'react';
import { Stack, Image, Box, IconButton } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Movie } from '../../service';

//FaHeart

interface MovieCardProps {
  moviesData: Movie[];
}

export const MovieCardComponent: FC <MovieCardProps> = ({ moviesData }) => {
  console.log(moviesData, 'movie');
  return (
    <Stack justifyContent='center' alignItems='center' w='65%'>
      <Stack direction='row' spacing={4} wrap='wrap' justifyContent='start'>
        {moviesData?.map((movie, index) => (
          <Link to={`/${movie.imdbID}`}>
            <Box
              key={index}
              boxShadow='md'
              position='relative'
              marginBottom={4}
            >
              <Box position='absolute' p={5} right={0}>
                {movie && (
                  <IconButton
                    colorScheme='gray'
                    isRound={true}
                    aria-label='Search database'
                    icon={<FaRegHeart />}
                    isDisabled={true}
                  />
                )}
              </Box>
              <Image
                fallbackSrc='https://via.placeholder.com/150'
                width={300}
                objectFit='cover'
                src={movie.Poster}
                alt={movie.Title}
              />
            </Box>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
