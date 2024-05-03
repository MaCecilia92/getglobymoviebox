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
  styles: {
    global: {
      body: {
        bg: 'black', // Cambia 'blue.100' al color que desees
      },
    },
  },
});

export default customTheme;
