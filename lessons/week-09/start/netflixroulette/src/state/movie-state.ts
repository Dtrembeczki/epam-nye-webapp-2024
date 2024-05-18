import { Movie, MovieSortType } from '../models';

export interface MovieResults {
  movies: Movie[];
  total: number;
};

export interface MovieStateActions {
  search: (query: string) => void;
  setResults: (results: MovieResults) => void;
  changeOrder: (order: MovieSortType) => void;
}

export interface MovieState {
  movies: Movie[];
  total: number;
  query: string;
  orderBy: MovieSortType;
}

export const INITIAL_STATE: MovieState = {
  movies: [],
  total: 0,
  query: '',
  orderBy: MovieSortType.RATING_DESC,
};
