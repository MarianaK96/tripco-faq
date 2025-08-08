import { MovieMapping } from "../common/organisms";

interface DashboardProps {
  movies: IMovie[] | undefined;
  isLoading: boolean;
}
export const Dashboard = ({ movies, isLoading }: DashboardProps) => {
  return (
    <div className="pl-8">
      <MovieMapping movies={movies} isLoading={isLoading} />
    </div>
  );
};
