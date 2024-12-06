import "./Rating.css"
export default function Rating({ rating }: { rating: number }) {
  const fullStar = "../src/assets/img/Star-full.png"; // Update with your full star PNG path
  const emptyStar = "../src/assets/img/Star-empty.png"; // Update with your empty star PNG path
  const maxStars = 5;

  const stars = Array(maxStars).fill(null);

  return (
    <div className="ratingContainer">
      {stars.map((_, index) => (
        <img
        className="star"
          key={index}
          src={rating > index ? fullStar : emptyStar}
          alt={rating > index ? "Full Star" : "Empty Star"}
        />
      ))}
    </div>
  );
}
