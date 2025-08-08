import { describe, it, expect } from "vitest";
import { groupMoviesByGenre } from "../data/utils";

const mockMovies: IMovie[] = [
  {
    id: "1",
    title: "Action Movie",
    slug: "action-movie",
    backdrop: "backdrop1.jpg",
    poster: "poster1.jpg",
    director: "Director One",
    cast: ["Actor 1", "Actor 2"],
    genres: ["Action", "Adventure"],
    classification: "PG-13",
    imdb_rating: 7.5,
    length: "120 min",
    overview: "An action-packed adventure",
    released_on: "2023-01-01",
  },
  {
    id: "2",
    title: "Comedy Movie",
    slug: "comedy-movie",
    backdrop: "backdrop2.jpg",
    poster: "poster2.jpg",
    director: "Director Two",
    cast: ["Actor 3", "Actor 4"],
    genres: ["Comedy", "Romance"],
    classification: "PG",
    imdb_rating: 6.8,
    length: "90 min",
    overview: "A funny romantic comedy",
    released_on: "2023-02-01",
  },
  {
    id: "3",
    title: "Action Comedy",
    slug: "action-comedy",
    backdrop: "backdrop3.jpg",
    poster: "poster3.jpg",
    director: "Director Three",
    cast: ["Actor 5", "Actor 6"],
    genres: ["Action", "Comedy"],
    classification: "PG-13",
    imdb_rating: 8.2,
    length: "110 min",
    overview: "Action meets comedy",
    released_on: "2023-03-01",
  },
];

describe("groupMoviesByGenre", () => {
  it("groups movies by their genres", () => {
    const result = groupMoviesByGenre(mockMovies);

    expect(result["Action"]).toHaveLength(2);
    expect(result["Action"]).toContainEqual(mockMovies[0]);
    expect(result["Action"]).toContainEqual(mockMovies[2]);

    expect(result["Comedy"]).toHaveLength(2);
    expect(result["Comedy"]).toContainEqual(mockMovies[1]);
    expect(result["Comedy"]).toContainEqual(mockMovies[2]);

    expect(result["Adventure"]).toHaveLength(1);
    expect(result["Adventure"]).toContainEqual(mockMovies[0]);

    expect(result["Romance"]).toHaveLength(1);
    expect(result["Romance"]).toContainEqual(mockMovies[1]);
  });

  it("handles empty movie array", () => {
    const result = groupMoviesByGenre([]);

    expect(result).toEqual({});
  });

  it("handles movies with no genres", () => {
    const moviesWithoutGenres: IMovie[] = [
      {
        id: "1",
        title: "Test Movie",
        slug: "test-movie",
        backdrop: "backdrop.jpg",
        poster: "poster.jpg",
        director: "Test Director",
        cast: ["Test Actor"],
        genres: [],
        classification: "PG",
        imdb_rating: 5.0,
        length: "100 min",
        overview: "Test overview",
        released_on: "2023-01-01",
      },
    ];

    const result = groupMoviesByGenre(moviesWithoutGenres);

    expect(result).toEqual({});
  });

  it("handles single movie with multiple genres", () => {
    const singleMovie: IMovie[] = [
      {
        ...mockMovies[0],
        genres: ["Sci-Fi", "Thriller", "Drama"],
      },
    ];

    const result = groupMoviesByGenre(singleMovie);

    expect(result["Sci-Fi"]).toHaveLength(1);
    expect(result["Thriller"]).toHaveLength(1);
    expect(result["Drama"]).toHaveLength(1);
    expect(result["Sci-Fi"][0]).toEqual(singleMovie[0]);
    expect(result["Thriller"][0]).toEqual(singleMovie[0]);
    expect(result["Drama"][0]).toEqual(singleMovie[0]);
  });
});
