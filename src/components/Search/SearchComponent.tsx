/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import { MovieCardComponent } from '../MovieCard/MovieCardComponent';
import { Stack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { MovieFavorite } from '../../page/HomePage/HomePage';
import { NotFoundComponent } from '../NotFound/NotFoundComponent';

export interface SearchComponentProps {
  searchResults: any[] | MovieFavorite[];
  SearchByTerm: (term: any) => void;
  error: string | boolean;
}

export const SearchComponent: FC<SearchComponentProps> = ({
  searchResults,
  SearchByTerm,
  error,
}) => {
  const [term, setTerm] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    return setTerm({ s: searchValue });
  };

  useEffect(() => {
    typeof term !== 'object' || Object.keys(term).length !== 0
      ? SearchByTerm(term)
      : null;
  }, [term]);

  console.log(error, 'conditional');
  console.log(searchResults);
  console.log(SearchByTerm);
  
  return (
    <>
      <Stack spacing={4} w='65%' m={10}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search...'
            onChange={(e) => handleChange(e)}
            bg='gray.100'
          />
        </InputGroup>
      </Stack>
      <Stack justifyContent='center' alignItems='center' w='65%'>
      {error &&
        <NotFoundComponent />
      }
      {searchResults && (
        <Stack direction='row' spacing={4} wrap='wrap' justifyContent='start'>
          <MovieCardComponent moviesData={term ? searchResults : []} />
        </Stack>
      )}
      </Stack>
    </>
  );
};
