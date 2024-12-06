import "./InfoHolder.css";
import Heading from "../Heading/Heading";
import Bonus from "../Bonus/Bonus";
import Rating from "../Rating/Rating";

export default function CasinoContainer({
  name,
  rating,
  bet,
  get,
}: {
  name: string;
  rating: number;
  bet: number;
  get: number;
}) {
  return (
    <div className="infoContainer">
      <div className="rating">
        <Heading name={name} />
        <Rating rating={rating} />
      </div>
      <Bonus bet={bet} get={get} />
    </div>
  );
}
