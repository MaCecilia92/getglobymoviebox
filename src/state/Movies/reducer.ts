/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSearchState } from './initialState';

const moviesSlice = createSlice({
  name: 'getmovies',
  initialState: {
    searchResults: [],
    totalResults: '0',
    movieById: {},
    isLoading: false,
    error: false,
  } as MovieSearchState,
  reducers: {
    setDataRequest: (state) => {
      state.isLoading = true;
    },
    setDataSucceeded: (state, action: PayloadAction<any>) => {
        if (action.payload.Search) {
            state.searchResults = action.payload.Search;
            state.totalResults = action.payload.totalResults;
          } else {
            state.error = action.payload.Response;
            state.searchResults = [];
          }
    },
    setDataError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = true;
    },
    setDataByIdRequest: (state) => {
      state.isLoading = true;
    },
    setDataByIdSuceeded: (state, action: PayloadAction<any>) => {
      console.log(action.payload, 'payId');
      state.movieById = action.payload;
      state.isLoading = false;
    },
    setDataByIdError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = true;
    },
    clearData: (state) => {
      state.searchResults = [];
      state.totalResults = '0';
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const {
  setDataRequest,
  setDataSucceeded,
  setDataError,
  setDataByIdRequest,
  setDataByIdSuceeded,
  setDataByIdError,
  clearData,
} = moviesSlice.actions;

export default moviesSlice.reducer;