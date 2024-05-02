import { type FC } from 'react';
import { SearchComponent } from '../../components';
import { SearchComponentProps } from '../../components';

const HomePage: FC<SearchComponentProps> = ({
  searchResults,
  SearchByTerm,
}) => {
  return (
    <>
      <SearchComponent
        searchResults={searchResults}
        SearchByTerm={SearchByTerm}
      />
    </>
  );
};

export default HomePage;
