import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import '@fontsource/poppins';

const customTheme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
  colors: {
    ...colors,
  },
});

export default customTheme;
