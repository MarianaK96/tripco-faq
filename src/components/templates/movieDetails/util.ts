export const imdbToStar = (imdbRating: number) => {
  const starRating = imdbRating / 2; // imdbRating is out of 10, convert to a scale of 1-5
  const clampedRating = Math.max(0, Math.min(starRating, 5)); // clamp between 0 and 5
  return Math.round(clampedRating * 10) / 10; // round to 1 decimal place
};
