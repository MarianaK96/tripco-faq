// groups movies by their genres
export const groupMoviesByGenre = (
  movies: IMovie[]
): Record<string, IMovie[]> => {
  const result: Record<string, IMovie[]> = {};

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!result[genre]) {
        result[genre] = [];
      }
      result[genre].push(movie);
    });
  });

  return result;
};
