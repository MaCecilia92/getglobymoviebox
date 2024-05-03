/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box, Text, Image, Heading } from '@chakra-ui/react';
import ImdbLogo from '../../assets/imdb-icon.png';

export interface DetailComponentProps {
  getMovieById: (params: { i: string | undefined }) => void;
  movieByIdResult?: Record<string, any>;
}

export const DetailComponent: FC<DetailComponentProps> = ({
  getMovieById,
  movieByIdResult,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getMovieById({ i: id });
  }, [id]);

  return (
    <Box width='65%' mt={20}>
      <Flex color='white'>
        <Box width='300px' display='flex' justifyContent='start'>
          <Image
            fallbackSrc='https://via.placeholder.com/150'
            width={300}
            objectFit='cover'
            src={movieByIdResult?.Poster}
            alt={movieByIdResult?.Title}
          />
        </Box>
        <Box flex='1' p={5}>
          <Box mb={2}>
            <Heading as='h1' size='xl'>
              {movieByIdResult?.Title}
            </Heading>
            <Text fontSize='xl'>
              {movieByIdResult?.Runtime} - {movieByIdResult?.Year}
            </Text>
          </Box>
          <Flex alignItems='center' mb={5}>
            <Image src={ImdbLogo} />
            <Text fontSize='2xl' as='b' p={2}>
              {movieByIdResult?.imdbRating}/10
            </Text>
          </Flex>
          <Heading as='h5' size='sm'>
            Overview
          </Heading>
          <Text fontSize='md'>{movieByIdResult?.Plot}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
