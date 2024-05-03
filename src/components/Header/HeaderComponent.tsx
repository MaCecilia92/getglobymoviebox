import { type FC } from 'react';
import { Image, Box, Flex, Heading } from '@chakra-ui/react';
import MovieLogo from '../../assets/tv.png';

export const Header: FC = () => {
  return (
    <Box width='100%' display='flex' justifyContent='center'>
      <Flex width='65%' alignItems='start' gap='2' p={5}>
        <Image
          src={MovieLogo}
          fallbackSrc='https://via.placeholder.com/150'
          width={10}
          objectFit='cover'
          alt='MovieBox Logo'
        />
        <Box p='2'>
          <Heading size='md' color='brand.white'>
            MovieBox
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};
