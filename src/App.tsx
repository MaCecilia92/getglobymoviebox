// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import { useSelector } from 'react-redux';
import { selectSession } from './state/Session/selectors';
import { Text } from '@chakra-ui/react';

function App() {
  console.log(selectSession, 'select');

  return (
    <>
      <Text fontSize='6xl' bg='brand.primary'>
        (6xl) In love with React & Next
      </Text>
    </>
  );
}

export default App;
