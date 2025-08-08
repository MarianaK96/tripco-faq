import { imdbToStar } from "src/components/templates/movieDetails/util";
import { describe, it, expect } from "vitest";

describe("imdbToStar", () => {
  it("converts IMDB rating from 10-point scale to 5-point scale", () => {
    expect(imdbToStar(10)).toBe(5);
    expect(imdbToStar(8)).toBe(4);
    expect(imdbToStar(6)).toBe(3);
    expect(imdbToStar(4)).toBe(2);
    expect(imdbToStar(2)).toBe(1);
    expect(imdbToStar(0)).toBe(0);
  });

  it("handles decimal IMDB ratings and rounds to 1 decimal place", () => {
    expect(imdbToStar(7.5)).toBe(3.8);
    expect(imdbToStar(7.25)).toBe(3.6);
  });

  it("handles edge cases", () => {
    expect(imdbToStar(10)).toBe(5);
    expect(imdbToStar(0)).toBe(0);
  });

  it("handles negative numbers by rounding up to 0", () => {
    expect(imdbToStar(-2)).toBe(0);
    expect(imdbToStar(-10)).toBe(0);
  });

  it("caps numbers greater than 10 at 5 stars", () => {
    expect(imdbToStar(12)).toBe(5);
  });
});
