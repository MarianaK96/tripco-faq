import useSWR from "swr";
import { fetcher } from "../utils";
import { Dashboard } from "../components/templates/dashboard";
import { ComponentErrorBoundary } from "src/components/errors";
import { useWookieStore } from "src/store";

export const DashboardPage = () => {
  const movieSearch = useWookieStore().movieSearch;

  const { data, isLoading, error } = useSWR<{ movies: IMovie[] }>(
    `https://wookie.codesubmit.io/movies?q=${movieSearch}`,
    fetcher,
    { keepPreviousData: true }
  );

  if (error) return <ComponentErrorBoundary />;

  return <Dashboard isLoading={isLoading} movies={data?.movies} />;
};
