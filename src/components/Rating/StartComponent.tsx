import { StarIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';
import { type FC } from 'react';

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

export const StarComponent: FC<StarProps> = ({ filled, onClick }) => {
  return (
    <Box
      as='button'
      onClick={onClick}
      aria-label={filled ? 'star-filled' : 'star-empty'}
      mb={2}
      p={2}
      sx={{
        '&:hover': {
          borderColor: 'transparent',
        },
        '&:focus': {
          outline: 'none',
        },
      }}
    >
      <Icon
        as={StarIcon}
        color={filled ? 'yellow.400' : 'gray.300'}
        boxSize='1.5rem'
      />
    </Box>
  );
};
