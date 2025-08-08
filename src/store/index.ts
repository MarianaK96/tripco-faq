import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { movieSlice, MovieState } from "./movies.store";
import { bookmarkSlice, BookmarkState } from "./bookmarks.store";

export const useWookieStore = create<MovieState & BookmarkState>()(
  persist(
    (...a) => ({
      ...movieSlice(...a),
      ...bookmarkSlice(...a),
    }),
    {
      name: 'wookie-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
