import { useParams } from "react-router";

import { MovieDetails } from "src/components/templates/movieDetails";

export const MovieDetailsPage = () => {
  const { movieSlug } = useParams();

  return <MovieDetails movieSlug={movieSlug} />;
};
