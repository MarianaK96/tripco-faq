import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Rating } from "../components/common/atoms/rating";

describe("Rating Component", () => {
  it("renders full stars for integer ratings", () => {
    render(<Rating score={4} />);

    const ratingContainer = screen.getByRole("img");
    expect(ratingContainer).toBeInTheDocument();
    expect(ratingContainer).toHaveAttribute(
      "aria-label",
      "Rating: 4 out of 5 stars"
    );
  });

  it("renders half star for decimal ratings", () => {
    render(<Rating score={2.7} />);

    const ratingContainer = screen.getByRole("img");
    expect(ratingContainer).toBeInTheDocument();
    expect(ratingContainer).toHaveAttribute(
      "aria-label",
      "Rating: 2.7 out of 5 stars"
    );
  });

  it("handles zero rating", () => {
    render(<Rating score={0} />);

    const ratingContainer = screen.getByRole("img");
    expect(ratingContainer).toBeInTheDocument();
    expect(ratingContainer).toHaveAttribute(
      "aria-label",
      "Rating: 0 out of 5 stars"
    );
  });

  it("handles maximum rating", () => {
    render(<Rating score={5} />);

    const ratingContainer = screen.getByRole("img");
    expect(ratingContainer).toBeInTheDocument();
    expect(ratingContainer).toHaveAttribute(
      "aria-label",
      "Rating: 5 out of 5 stars"
    );
  });
});
