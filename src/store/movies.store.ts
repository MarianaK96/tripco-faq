import { StateCreator } from "zustand";

export interface MovieState {
  movieSearch: string | undefined;
  setMovieSearch: (search: string | undefined) => void;
}

export const movieSlice: StateCreator<MovieState, [], [], MovieState> = (
  set
) => ({
  movieSearch: "",
  setMovieSearch: (search: string | undefined) => set({ movieSearch: search }),
});
