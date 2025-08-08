import { toast } from "react-toastify";

import { useWookieStore } from "src/store";

export const useBookmark = () => {
  const addBookmark = useWookieStore().addBookmark;
  const removeBookmark = useWookieStore().removeBookmark;
  const bookmarks = useWookieStore().bookmarks;

  const isBookmarked = (movieId: string) => {
    return bookmarks.some((bookmark) => bookmark.id === movieId);
  };

  const toggleBookmark = (movie: IMovie) => {
    const movieIsBookmarked = isBookmarked(movie.id);

    if (movieIsBookmarked) {
      removeBookmark(movie.id);
      toast("Your bookmark has been removed");
    } else {
      addBookmark(movie);
      toast("Your bookmark has been added");
    }
  };

  return {
    isBookmarked,
    toggleBookmark,
  };
};
