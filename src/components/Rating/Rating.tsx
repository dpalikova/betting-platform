import "./Rating.css";

export interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const fullStar = "../src/assets/img/Star-full.png";
  const emptyStar = "../src/assets/img/Star-empty.png";
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rating-container">
      {stars.map((star) => (
        <img
          className="star"
          key={star}
          src={rating >= star ? fullStar : emptyStar}
          alt={rating >= star ? "Full Star" : "Empty Star"}
        />
      ))}
    </div>
  );
};
