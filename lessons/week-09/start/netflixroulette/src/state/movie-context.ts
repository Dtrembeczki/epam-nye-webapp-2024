import { createContext, useContext } from 'react';
import { MovieState, MovieStateActions } from './movie-state';

export type MovieContext = MovieStateActions & MovieState;

export const createMovieContext = () => {
  const context = createContext<MovieContext | null>(null);

  const useMovieContext = () => {
    const ctx = useContext<MovieContext | null>(
      //@ts-ignore
      context as MovieContext
    );
    if (!ctx) {
      throw new Error('movieContext must be within a MovieContext component');
    }
    return ctx;
  };
  return [useMovieContext, context.Provider] as const;
};

export const [useMovieContext, MovieContextProvider] = createMovieContext();
