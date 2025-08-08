import { useBookmark } from "src/hooks";
import { Skeleton } from "./Skeleton";
import { fetcher } from "src/utils";
import useSWR from "swr";
import { Bookmark, Rating } from "src/components/common/atoms";
import { ComponentErrorBoundary } from "src/components/errors";
import { imdbToStar } from "./util";

interface MovieDetailsProps {
  movieSlug: string | undefined;
}
export const MovieDetails = ({ movieSlug }: MovieDetailsProps) => {
  const { isBookmarked, toggleBookmark } = useBookmark();

  const {
    data: movie,
    isLoading,
    error,
  } = useSWR<IMovie>(
    `https://wookie.codesubmit.io/movies/${movieSlug}`,
    fetcher
  );

  if (error) return <ComponentErrorBoundary isHomePage={false} />;

  if (isLoading || !movie) return <Skeleton />;

  const yearOfRelease = new Date(movie.released_on).getFullYear();

  return (
    <>
      <div className="py-14">
        <div className="flex flex-col md:flex-row w-full justify-around px-8 gap-10 max-w-[100rem] mx-auto items-center md:items-start">
          <div className="mb-2 w-60 mx-auto md:mx-0 md:w-1/4 relative">
            <img
              loading="lazy"
              src={movie.poster}
              alt={`Movie poster for ${movie.title}`}
              className="rounded w-full"
            />
            <div className="absolute top-0 right-0 m-2">
              <Bookmark
                handleClick={() => toggleBookmark(movie)}
                isBookmarked={isBookmarked(movie.id)}
                className="text-white"
              />
            </div>
          </div>

          <div className="md:hidden">
            <Rating score={imdbToStar(movie.imdb_rating)} size={48} />
          </div>

          <div className="flex flex-col gap-2 w-full md:text-left text-center md:w-3/4 md:pl-10">
            <div className="flex items-center justify-between  md:w-full w-fit mx-auto md:mx-0">
              <h1 className="text-2xl font-semibold">{movie.title}</h1>
              <div className="hidden md:block">
                <Rating score={imdbToStar(movie.imdb_rating)} size={48} />
              </div>
            </div>

            <div className="flex justify-between w-fit gap-3 items-center md:mx-0 mx-auto">
              <p>{movie.length}</p> |<p>{yearOfRelease}</p>|
              <p>{movie.director}</p>
            </div>
            <p>Cast: {movie.cast.join(", ")}</p>
            <p className="mt-4">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
