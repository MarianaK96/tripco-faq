import { MovieCard } from "../movieCard";

interface GenreMappingProps {
  genre: string;
  movies: IMovie[];
}
export const GenreMapping = ({ movies, genre }: GenreMappingProps) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">{genre}</h2>
        <div key={genre} className=" overflow-y-hidden snap-x snap-mandatory">
          <div className="flex gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="snap-start snap-always">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
