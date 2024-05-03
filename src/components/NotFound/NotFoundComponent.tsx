import { type FC } from 'react';
import { Image, Box, Heading } from '@chakra-ui/react';
import { notFoundStrings } from '../../constants';
import NotFoundImage from '../../assets/notFound.png';

export const NotFoundComponent: FC = () => {
  return (
    <Box>
      <Image
        src={NotFoundImage}
        fallbackSrc='https://via.placeholder.com/150'
        width={500}
        objectFit='cover'
        alt='MovieBox Logo'
      />
      <Heading as='h1' size='xl' color='brand.white'>
        {notFoundStrings.SEARCH}
      </Heading>
      <Heading as='h5' size='md' textAlign='center'>
        {notFoundStrings.OFFER}
      </Heading>
    </Box>
  );
};
