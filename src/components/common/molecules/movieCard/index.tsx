import { Link } from "react-router";
import { Bookmark } from "src/components/common/atoms";
import { useBookmark } from "src/hooks";

interface MovieCardProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: MovieCardProps) => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const yearOfRelease = new Date(movie.released_on).getFullYear();

  return (
    <div className="py-2 ">
      <Link to={`/${movie.slug}`} className="no-underline">
        <div className="w-72 md:w-96 mb-2 hover:opacity-70">
          <img
            loading="lazy"
            src={movie.backdrop}
            alt={`Movie backdrop for ${movie.title}`}
            className="rounded w-full"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between items-start">
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <Bookmark
            handleClick={() => toggleBookmark(movie)}
            isBookmarked={isBookmarked(movie.id)}
          />
        </div>

        <div className="flex justify-between w-fit gap-3 items-center">
          <p>{movie.length}</p>{" "}
          <div
            className="rounded-full h-1 w-1 bg-gray-700"
            aria-hidden="true"
          />
          <p>{yearOfRelease}</p>
          <div className="rounded-full h-1 w-1 bg-black" aria-hidden="true" />
          <p>{movie.classification}</p>
        </div>
      </div>
    </div>
  );
};
