import { type FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';

const App: FC = () => {
  return (
    <VStack width='100vw'>
      <Header />
      <Router>
        <Routes>
          <Route element={<HomePage />} path='/home' />
          <Route element={<DetailPage />} path='/:id' />
          <Route element={<HomePage />} path='/' />
        </Routes>
      </Router>
    </VStack>
  );
};

export default App;
