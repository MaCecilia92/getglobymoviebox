/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import { MovieCardComponent } from '../MovieCard/MovieCardComponent';
import { Stack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface SearchComponentProps {
  searchResults: any[];
  SearchByTerm: (term: any) => void;
}

export const SearchComponent: FC<SearchComponentProps> = ({
  searchResults,
  SearchByTerm,
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

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search...'
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>
      </Stack>
      <MovieCardComponent moviesData={term ? searchResults : []} />
    </>
  );
};
