import { groupMoviesByGenre } from "src/data/utils";
import {
  GenreMapping,
  SkeletonGenreMapping,
} from "src/components/common/molecules";
import { NoResults } from "src/components/errors";

interface MovieMappingProps {
  movies: IMovie[] | undefined;
  isLoading: boolean;
}
export const MovieMapping = ({ movies, isLoading }: MovieMappingProps) => {
  if (isLoading || movies === undefined) {
    return (
      <>
        <SkeletonGenreMapping />
        <SkeletonGenreMapping />
        <SkeletonGenreMapping />
      </>
    );
  }

  const grouped = groupMoviesByGenre(movies);

  if (movies.length === 0) return <NoResults />;

  return (
    <div>
      {Object.entries(grouped).map(([genre, movies]) => (
        <div key={genre} className="my-8">
          <GenreMapping genre={genre} movies={movies} />
        </div>
      ))}
    </div>
  );
};
