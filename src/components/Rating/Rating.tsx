import "./Rating.css";
import fullStar from "/img/Star-full.png";
import emptyStar from "/img/Star-empty.png";

export interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
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
