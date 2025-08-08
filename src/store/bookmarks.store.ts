import { StateCreator } from "zustand";

export interface BookmarkState {
  bookmarks: IMovie[];
  addBookmark: (bookmark: IMovie) => void;
  removeBookmark: (id: string) => void;
}

export const bookmarkSlice: StateCreator<
  BookmarkState,
  [],
  [],
  BookmarkState
> = (set) => ({
  bookmarks: [],
  addBookmark: (bookmark: IMovie) =>
    set((state: { bookmarks: IMovie[] }) => ({
      bookmarks: [...state.bookmarks, bookmark],
    })),
  removeBookmark: (id: string) =>
    set((state: { bookmarks: IMovie[] }) => ({
      bookmarks: state.bookmarks.filter(
        (bookmark: { id: string }) => bookmark.id !== id
      ),
    })),
});
